function arrayToHex(byteArray) {
    let hexString = "";

    for (let i = 0; i < byteArray.length; i++) {
        hexString += byteArray[i].toString(16).padStart(2, "0");
    }
    return hexString;
}

// const byteArray = new Uint8Array([72, 101, 108, 108, 111]);
const byteArray = new Uint8Array([76, 97, 120, 109, 97, 110]);
const hexString = arrayToHex(byteArray);
console.log("Byte array to Hex conversion:", hexString);