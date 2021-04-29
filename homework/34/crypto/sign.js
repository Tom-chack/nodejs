const crypto = require('crypto');
const fs = require('fs');
const encrypt = require('./encrypt');
const decript = require('./decrypt');

const myData = {
    firstname: 'Artyom',
    lastname: 'Chakhoyan',
    tocken: 'not a personal or secure data, the digital signature does not hide the data'
}

const hash = crypto.createHash('sha256'); 
const myDataString = JSON.stringify(myData);
hash.update( myDataString );
const hashedData = hash.digest('hex')

const senderPrivateKey = fs.readFileSync( __dirname + '/id_rsa_priv.pem', 'utf-8');
const signedmessage = encrypt.encryptWithPrivateKey(senderPrivateKey, hashedData);

console.log( hashedData );