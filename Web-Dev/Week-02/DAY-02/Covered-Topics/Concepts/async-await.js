/*
    async/await: make promises easier to write.
    - provides a way to write async code that looks and behaves like
     sync code, making it easier to read and maintain. 
    - "async": makes a function return a Promise.
    - "await": makes a function wait for a Promise.
    - builds on top of Promises and allows us to avoid chaining .then() and .catch() methods while still working with async operations.
    - syntactic sugar on top of Promises.
*/

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
    await setTimeoutPromisified(1000);
    console.log("Hi.");
    await setTimeoutPromisified(2000);
    console.log("hello.");
    await setTimeoutPromisified(3000);
    console.log("Welcome.");
}

solve();