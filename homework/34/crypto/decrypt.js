const crypto = require('crypto');

//Data Decryption | private.key
function decryptWithPrivateKey( privateKey, encryptedMessage ){
    return crypto.privateDecrypt(privateKey, encryptedMessage);
}

//Digital Verification | public.key
function decryptWithPublicKey( publicKey, encryptedMessage ){
    return crypto.publicDecrypt(publicKey, encryptedMessage);
}

module.exports.decryptWithPrivateKey = decryptWithPrivateKey;
module.exports.decryptWithPublicKey = decryptWithPublicKey;