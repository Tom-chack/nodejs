const fs = require('fs');
const encrypt = require('./encrypt');
const decript = require('./decrypt');

// Encrypt a message
const publicKey = fs.readFileSync( __dirname + '/id_rsa_pub.pem', 'utf-8');
const message = "My Secrat Message";
const encryptedMessage = encrypt.encryptWithPublicKey(publicKey, message);
console.log( encryptedMessage.toString() );

//Decrypt a message
const privateKey = fs.readFileSync( __dirname + '/id_rsa_priv.pem', 'utf-8');
const decryptedMessage = decript.decryptWithPrivateKey(privateKey, encryptedMessage);
console.log( decryptedMessage.toString() );