// Conversion from Bytes to ASCII values.

function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
}

// But, this is not the memory optimize recommendation, instead we use UInt8Array.
// Corresponds to "H","e","l","l","o"
// const bytes = [72, 101, 108, 108, 111];
// Corresponds to "L","a","x","m","a","n"
const bytes = [76, 97, 120, 109, 97, 110];
const asciiString = bytesToAscii(bytes);
console.log("Byte to ASCII conversion:", asciiString);