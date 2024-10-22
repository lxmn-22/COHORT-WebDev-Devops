// Conversion to Hex to Byte array values.

function hexToArray(hexString) {
    const byteArray = new Uint8Array(hexString.length / 2);

    for (let i = 0; i < byteArray.length; i++) {
        byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return byteArray;
}

const hex = "4c6178";
const byteArrayFormHex = hexToArray(hex);
console.log(byteArrayFormHex);