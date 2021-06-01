
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const {_USER} = require('../models/modelAuth');



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

    jwtGenerate( user ) {
        const PRIV_KEY = fs.readFileSync( path.join(__dirname, '..', 'id_rsa_priv.pem'), 'utf8');
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

    
    jwtVerify( signedJWT ){

        const PUB_KEY = fs.readFileSync( path.join(__dirname, '..', 'id_rsa_pub.pem'), 'utf8');

        jwt.verify(signedJWT, PUB_KEY, {algorithms: ['RS256']}, (err, payload) =>{

            _USER.findOne({_id: payload.sub })
                .then( user => {
                    if( user ){
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                })
                .catch( error => done(error, null) );
        });
    }


}


  
  module.exports = new Utils();