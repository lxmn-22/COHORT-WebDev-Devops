const crypto = require('crypto');

// generating a random encryption key.
const key = crypto.randomBytes(32);         // 32 bytes => (32 * 8) = 256 bits
const initVector = crypto.randomBytes(16);  // Initialization vector (IV)

// function to encrypt text.
function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, initVector);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return encrypted;
}

// function to decrypt text.
function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, initVector);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
}

const textToEncrypt = 'Laxman';
const encryptedText = encrypt(textToEncrypt);
const decryptedText = decrypt(encryptedText);

console.log("Original text:", textToEncrypt);
console.log(key);
console.log("Encrypted text:", encryptedText);
console.log("Decrypted text:", decryptedText);