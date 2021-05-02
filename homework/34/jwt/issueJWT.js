//https://www.youtube.com/watch?v=kMpklLgF0PQ

const fs = require('fs');
const base64url = require('base64url');
const crypto = require('crypto');
const signer = crypto.createSign('RSA-SHA256');
const verifyer = crypto.createVerify('RSA-SHA256');


// CREATING JWT /////////////////////////////////////////
/*

const header_Obj = {
    "alg": "RS256",
    "typ": "JWT"
};

const payload_Obj = {
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true,
    "iat": 1516239022
};

const header_Obj_String = JSON.stringify(header_Obj);
const payload_Obj_String = JSON.stringify(payload_Obj);

const header_Obj_base64url = base64url(header_Obj_String);
const payload_Obj_base64url = base64url(payload_Obj_String);

signer.write( header_Obj_base64url + '.' + payload_Obj_base64url );
signer.end();

const PRIV_KEY = fs.readFileSync(__dirname + '/priv_key.pem', 'utf-8');
const signature_base64 = signer.sign(PRIV_KEY, 'base64');
const signature_base64url = base64url.fromBase64(signature_base64);

console.log(signature_base64url);

*/
// END OF JWT CREATION ////////////////////////////////////////////



// VERIFYING THE SIGNATURE ////////////////////////////////////////
const _JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.POstGetfAytaZS82wHcjoTyoqhMyxXiWdR7Nn7A29DNSl0EiXLdwJ6xC6AfgZWF1bOsS_TuYI3OG85AmiExREkrS6tDfTQ2B3WXlrr-wp5AokiRbz3_oB4OxG-W9KcEEbDRcZc0nH3L7LzYptiy1PtAylQGxHTWZXtGz4ht0bAecBgmpdgXMguEIcoqPJ1n3pIWk_dUZegpqx0Lka21H6XxUTxiy8OcaarA8zdnPUnV6AmNP3ecFawIFYdvJB_cm-GvpCSbr8G8y_Mllj8f4x9nBH8pQux89_6gUY618iYv7tuPWBFfEbLxtF2pZS6YC1aSfLQxeNe8djT9YjpvRZA';

const JWT = _JWT.split('.');

const headerBase64url_JWT = JWT[0];
const payloadBase64url_JWT = JWT[1];
const signatureBase64url_JWT = JWT[2];

verifyer.write( headerBase64url_JWT + '.' + payloadBase64url_JWT );
verifyer.end();

const signatureBase64_JWT = base64url.toBase64(signatureBase64url_JWT);

const PUB_KEY = fs.readFileSync(__dirname + '/pub_key.pem', 'utf-8');

const signatureVERIFIED = verifyer.verify(PUB_KEY, signatureBase64_JWT, 'base64');

console.log(signatureVERIFIED);

// END of VERIFICATION ///////////////////////////////////////////


/*
const _JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.POstGetfAytaZS82wHcjoTyoqhMyxXiWdR7Nn7A29DNSl0EiXLdwJ6xC6AfgZWF1bOsS_TuYI3OG85AmiExREkrS6tDfTQ2B3WXlrr-wp5AokiRbz3_oB4OxG-W9KcEEbDRcZc0nH3L7LzYptiy1PtAylQGxHTWZXtGz4ht0bAecBgmpdgXMguEIcoqPJ1n3pIWk_dUZegpqx0Lka21H6XxUTxiy8OcaarA8zdnPUnV6AmNP3ecFawIFYdvJB_cm-GvpCSbr8G8y_Mllj8f4x9nBH8pQux89_6gUY618iYv7tuPWBFfEbLxtF2pZS6YC1aSfLQxeNe8djT9YjpvRZA';

const JWT = _JWT.split('.');

const headerBase64_JWT = JWT[0];
const payloadBase64_JWT = JWT[1];
const signatureBase64_JWT = JWT[2];

const headerBase64_Decoded_JWT = base64url.decode(headerBase64_JWT);
const payloadBase64_Decoded_JWT = base64url.decode(payloadBase64_JWT);
const signatureBase64_Decoded_JWT = base64url.decode(signatureBase64_JWT);

console.log(headerBase64_Decoded_JWT);
console.log(payloadBase64_Decoded_JWT);
console.log(signatureBase64_Decoded_JWT);
*/