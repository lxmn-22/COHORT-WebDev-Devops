/*
Normal functions in JS:
*/

function add(a, b) {
    return (a + b);
}
console.log("Addition of two numbers: ", add(22, 11));

/* 
Function: sum from 1 to N.
*/

function sum(N) {
    let total = 0;

    for (let i = 1; i <= N; i++) {
        total += i;
    }
    return total;
}

console.log("Sum of first 5 numbers: ", sum(5));
console.log("Sum of first 50 numbers: ", sum(50));
console.log("Sum of first 100 numbers: ", sum(100));


const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);