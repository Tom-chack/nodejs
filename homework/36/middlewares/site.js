const {USER} = require('../models/user');
const {authorize} = require('./authorize');

const localVariables = async (req, res, next) => {
    res.locals = {
        isLogin: false,
        siteName: 'My Demo Site',
        message: (req.query.m) ? req.query.m : '',
        user: {},
        userid: '',
        tokens: {
            access: '',
            refresh: '',
            error: '',
        }
    }

    // Set Tokens /////////////////////////////////////////////////////////
    if( req.cookies['x-access'] ){
        res.locals.tokens.access = req.cookies['x-access'];
    } else {
        const authHeader = req.get('Authorization'); // Bearer dsfdsfdsfdsfsdfdsfdsfdsfdsfds
        res.locals.tokens.access = (authHeader) ? authHeader.replace('Bearer ', '') : '';
    }
    if( req.cookies['x-refresh'] ){
        res.locals.tokens.refresh = req.cookies['x-refresh'];
    }
    ///////////////////////////////////////////////////////////////////////

    let tokenData = await authorize(req, res);
    console.log(tokenData);
    if( tokenData ){
        res.locals.userid = tokenData.userid;
        res.locals.tokens.error = tokenData.error;
    
        if(tokenData.userid){
            try{
                res.locals.user = await USER.findById(tokenData.userid).exec();
                res.locals.isLogin = true;
            } catch(e){
               res.locals.tokens.error = e.message;
            }
        }
    }
    
    next();
}

module.exports = {
    localVariables
}