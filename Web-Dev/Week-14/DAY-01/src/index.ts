// number, string, any
let x: number = 1;

// console.log(x)

function greet(firstName: string | number) {
    console.log(`Hello, ${firstName}.`);
}
// greet("Laxman")
// greet(7)

function sum(a: number, b: number): number {
    return a + b;
}
let result = sum(22, 11);


console.log(`Sum of two numbers: ${result}`);

function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}
delayedCall(function() {
    console.log("Hello");
})
