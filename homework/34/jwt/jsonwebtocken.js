const jwt = require('jsonwebtoken');
const fs = require('fs');


const PRIV_KEY = fs.readFileSync(__dirname + '/priv_key.pem', 'utf-8');
const PUB_KEY = fs.readFileSync(__dirname + '/pub_key.pem', 'utf-8');

const payload_Obj = {
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true,
    "iat": 1516239022
  }

  const signedJWT = jwt.sign(payload_Obj, PRIV_KEY, {algorithm:'RS256'});

  //console.log(signedJWT);

  jwt.verify(signedJWT, PUB_KEY, {algorithms: ['RS256']}, (err, payload) =>{
      console.log(err);
      console.log(payload_Obj);
  });