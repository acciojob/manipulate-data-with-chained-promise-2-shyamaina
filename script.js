//your JS code here. If required.

const output = document.getElementById("output");

function delay(ms, value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), ms);
    });
}

delay(3000, [1, 2, 3, 4])
    .then(arr => {
        const evenNumbers = arr.filter(num => num % 2 === 0);

        return delay(1000, evenNumbers);
    })
    .then(evenNumbers => {
        output.innerText = evenNumbers;

        const doubledNumbers = evenNumbers.map(num => num * 2);

        return delay(2000, doubledNumbers);
    })
    .then(doubledNumbers => {
        output.innerText = doubledNumbers;
    })
    .catch(error => {
        console.error(error);
    });
