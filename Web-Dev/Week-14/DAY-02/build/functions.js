"use strict";
/*
Functions in Typescript
- TS has a specific syntax for typing function parameters & return values.

*/
// Return Type: --------------------------------------------------------------------------------
function getTime() {
    return new Date().getTime();
}
const time = getTime();
console.log(time);
// Void Return Type: --------------------------------------------------------------------------------
function printHello() {
    console.log('Hello!');
}
console.log(printHello());
// Parameters: --------------------------------------------------------------------------------------
function areaOfRectangle(l, b) {
    return l * b;
}
console.log(`Area of rectangle: ${areaOfRectangle(22, 11)}`);
// Optional Parameters: -----------------------------------------------------------------------------
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(`Sum: ${add(22, 11, 10)}`);
// Default parameters: --------------------------------------------------------------------------------------------------
function power(value, exponent = 3) {
    return value ** exponent;
}
console.log(`Exponent value: ${power(5, 5)}`);
// Rest Parameters: -----------------------------------------------------------------------------------------------------
function addition(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(`Rest parameter addition: ${addition(10, 10, 10, 10, 10, 10)}`);
