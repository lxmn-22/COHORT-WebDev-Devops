// Conversion ByteArray(Uint8Array) to Base64.

// const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
const uint8Array = new Uint8Array([76, 97, 120, 109, 97, 110]);
const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log("Byte array converted to Base64:", base64Encoded);