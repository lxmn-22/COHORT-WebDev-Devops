// bit
let a = 0;
console.log(a);

// byte
let b = 202;
console.log(b);

// array of bytes.
const bytes = [202, 244, 1, 23];
console.log(bytes);

// UInt8Array
let bytes1 = new Uint8Array([0, 255, 127, 128]);
console.log(bytes1);

// can't exceed the 255 mark.
bytes1[0] = 300;
// console.log(bytes1);

