// Conversion from UInt8Array to ASCII value.

function bytesToAscii(byteArray) {
    return new TextDecoder().decode(byteArray);
}

// UInt8Array make sure the byte value didn't cross the value above 255.
// const bytes = new Uint8Array([72, 101, 108, 108, 111]);
const bytes = new Uint8Array([76, 97, 120, 109, 97, 110]);
const asciiString = bytesToAscii(bytes);
console.log("Byte to ASCII using Uint8Array:", asciiString);