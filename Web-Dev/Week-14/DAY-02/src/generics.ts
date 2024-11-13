/*
Generics in Typescript
- allows creating "type variables" which can be used to create classes, functions & type aliases 
that don't need to explicitly define the types that they use.
*/
function getFirstElement(arr: (string | number)[] ) {
    return arr[0];
}
const element = getFirstElement([1,2,3]);
console.log(element);

// user can send different types of values in inputs, without any type errors.
function getFirstElement1(arr: (string | number)[] ) {
    return arr[2];
}
const element1 = getFirstElement1([1,2,'3']);
console.log(element1);

// NOTE: TS isn't able to infer the right type of the return type.

function getFirstElement2(arr: (string | number)[] ) {
    return arr[0];
}
const element3 = getFirstElement2(["Laxman","Kamal","Neeru"]);
// console.log(element3.toLowerCase());
// Property 'toLowerCase' doesn't exist on type 'string | number'.

// Syntax
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// Solution: to above problem.
function getFirstElement4<T>(arr: T[]) {
    return arr[0];
}
const element4 = getFirstElement4(["Laxman","Kamal","Neeru"]);
const element5 = getFirstElement4<string>(["LaXman","Kamal","Neeru"]);
console.log(element4.toLowerCase());
console.log(element5.toUpperCase());
