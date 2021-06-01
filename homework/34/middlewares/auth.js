const jwt = require('jsonwebtoken');
const {jwtVerify} = require('../utils/passUtils');
const fs = require('fs');

const authorize = (req, res, next)=>{

    //Get Authorization from header
    if( req.headers.Authorization ){

        let token = req.headers.Authorization
        if( jwtVerify( signedJWT ) ){
            next();
        }else{
            res.redirect('/auth/login/');
        }
    }
    res.redirect('/');
}

// const authorize = (req, res, next)=>{
//     if(req.session.user){
//         next();
//     }else{
//         res.redirect('/auth/login/');
//     }
// }


module.exports={
    authorize
}