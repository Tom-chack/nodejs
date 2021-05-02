
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');


const pathToKey = path.join(__dirname, '..', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

/**
 * -------------- HELPER FUNCTIONS ----------------
 */

class Utils {

    passValidate(password_1, password_2) {
        return  bcrypt.compareSync(password_1, password_2);
    }


    passGenerate(password) {
        return bcrypt.hashSync(password);
    }

    jwtGenerate(user) {
        const _id = user._id;
        const expiresIn = '1d';
        const payload = {
            sub: _id,
            iat: Date.now()
        };
        const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });
        return {
            token: "Bearer " + signedToken,
            expires: expiresIn
        }
    }

}


  
  module.exports = new Utils();