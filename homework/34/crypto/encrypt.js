const crypto = require('crypto');

//Data Encryption | public.key
function encryptWithPublicKey( publicKey, message ){
    let bufferMessage = Buffer.from(message, 'utf-8');
    return crypto.publicEncrypt(publicKey, bufferMessage);
}

//Digital Signature | private.key
function encryptWithPrivateKey( privateKey, message ){
    let bufferMessage = Buffer.from(message, 'utf-8');
    return crypto.privateEncrypt(privateKey, bufferMessage);
}

module.exports.encryptWithPublicKey = encryptWithPublicKey;
module.exports.encryptWithPrivateKey = encryptWithPrivateKey;