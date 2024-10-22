// Creating a Public Private Keypair using Edwards-curve Digital Signature Algorithm- ED25519

import * as ed from "@noble/ed25519";

async function main() {
    // generating a secure random private key.
    const privateKey = ed.utils.randomPrivateKey();

    // convert the message "hello world" to a Uint8Array.
    const message = new TextEncoder().encode('hello world');

    // generate the public key from the private key.
    const publicKey = await ed.getPublicKeyAsync(privateKey);

    // Sign the message.
    const signature = await ed.signAsync(message, privateKey);

    // Verify the signature.
    const isValid = await ed.verifyAsync(signature, message, publicKey);

    // Output the result.
    console.log(isValid);
}

main();