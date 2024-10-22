// Conversion from ASCII to Byte using Uint8Array.

function asciiToBytes(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

// const ascii = "Hello";
const ascii = "Laxman";
const byteArray = asciiToBytes(ascii);
console.log("ASCII to Byte using Uint8Array:", byteArray);