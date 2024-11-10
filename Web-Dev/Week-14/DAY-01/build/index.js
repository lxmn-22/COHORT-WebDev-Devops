"use strict";
// number, string, any
let x = 1;
// console.log(x)
function greet(firstName) {
    console.log(`Hello, ${firstName}.`);
}
// greet("Laxman")
// greet(7)
function sum(a, b) {
    return a + b;
}
let result = sum(22, 11);
console.log(`Sum of two numbers: ${result}`);
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("Hello");
});
