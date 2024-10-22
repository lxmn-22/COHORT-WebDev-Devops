// Hashing function using node.js

const crypto = require("crypto");

const input = "Laxman";
const hash = crypto.createHash("sha256").update(input).digest("hex");

console.log("Hash String \"Laxman\":", hash);
