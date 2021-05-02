const fs = require('fs');
const crypto = require('crypto');
const decrypt = require('./decrypt');

//The data we're receiving from the sender
const {sendDataPackage} = require('./signedMessage');

const hash = crypto.createHash(sendDataPackage.algorithm);

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf-8');


const decryptedMessage = decrypt.decryptWithPublicKey(publicKey, sendDataPackage.signedEncryptedData);
const decryptedMessageHex = decryptedMessage.toString();


const hashOriginal = hash.update( JSON.stringify(sendDataPackage.originalData) );
const hashOriginalHax = hash.digest('hex');


if( decryptedMessageHex == hashOriginalHax ){
    console.log('Signature is Verified!');
} else {
    console.log('Not Signed!');
}

console.log(decryptedMessageHex, ' =|= ', hashOriginalHax);