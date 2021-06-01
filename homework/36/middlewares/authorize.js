require('dotenv').config();
const jwt = require('jsonwebtoken');
const {refreshToken} = require('../controllers/controlToken');

const authorize = async (req, res) =>{

    let tokenData = {
        userid: '',
        error: ''
    }

    const token = res.locals.tokens.access;

    if( !token ){
        tokenData.error = 'Access token is not found!';
    } else {
        try{
            const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            if( payload.userid ){
                tokenData.userid = payload.userid;
            } else if( payload.type !== 'access' ){
                tokenData.error = 'Invalid token type!';
            } else {
                tokenData.error = 'Invalid token payload!';
            }
        } catch(e) {
            if( e instanceof jwt.TokenExpiredError ){
                const rtoken = res.locals.tokens.refresh;
                const result = await refreshToken(req, res,  'return', rtoken);
                if( result.userid ){
                    tokenData.userid = result.userid;
                } else{
                    tokenData.error = result.error;
                }
            } else if( e instanceof jwt.JsonWebTokenError ){
                tokenData.error = 'Token Error!'
            } else {
                tokenData.error = 'Invalid token!'
            }
        }
        
        return tokenData;
    } 
    ////////////////////////////

}


const protect = async (req, res, next) =>{
    let error = res.locals.tokens.error;
    if(error){
        console.log('Error:', error);
        return res.redirect('/auth/login/?m=' + error);
    } else if( res.locals.userid ){
        return next();
    } else {
        return res.redirect('/auth/login/?m=' + 'It is time to login!');
    }
}

module.exports = {authorize, protect};