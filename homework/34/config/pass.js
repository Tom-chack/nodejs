const fs = require('fs');
const path = require('path');
const passport = require('passport');
const {_USER} = require('../models/modelAuth');
const {Strategy, ExtractJwt} = require('passport-jwt');


const pathTocken = path.join(__dirname, '..', '/id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathTocken, 'utf-8');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms:['RS256']
}

const strategy = new Strategy(options, ( payload, done ) =>{

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



module.exports = (passport) => {
    passport.use(strategy);
};




// const options = {
//     jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey = 'secret',
//     issuer = 'accounts.examplesoft.com',
//     audience = 'yoursite.net',
//     algorithms:['RS256'],
//     jsonWebTokenOptions: {
//         complete: false,
//         clockTolerance: '',
//         maxAge: '2d',
//         clockTimestamp: '100',
//         nonce: 'string for openid'
//     }
// }