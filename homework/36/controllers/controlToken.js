require('dotenv').config();
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const {handleErrors} = require('../utils/helper');

const {TOKEN} = require('../models/token');


class Token {


    constructor(){
        this.updateToken = this.updateToken.bind(this);
        this.refreshToken = this.refreshToken.bind(this);
    }

    createAccessToken( userid ){
        const payload = {
            userid: userid,
            role: 'admin',
            type: 'access'
        }
        const options = {
            expiresIn: process.env.JWT_ACCESS_EXPIN
        }
        return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, options);
    }

    createRefreshToken(){
        const payload = {
            tokenid: uuid.v4(),
            type: 'refresh'
        }
        const options = {
            expiresIn: process.env.JWT_REFRESH_EXPIN
        }
        return {
            tokenid: payload.tokenid,
            token: jwt.sign(payload, process.env.JWT_REFRESH_SECRET, options)
        }
    }

    async addToken(tokenid, userid){
        try{
            await TOKEN.create({tokenid, userid});
        } catch(e){
            throw e.message;
        }
    }

    async updateToken(userid){
        const accessToken = this.createAccessToken(userid);
        const refreshToken = this.createRefreshToken();
        await this.addToken(refreshToken.tokenid, userid);
        return {
            access: accessToken,
            refresh: refreshToken.token
        }
    }

    setTokens( tokens, req, res ){
        let accessOptions = {
            httpOnly: false
        };
        let refreshOptions = {
            httpOnly: true,
            maxAge: 365 * 24 * 60 * 60 * 1000
        };

        res.cookie('x-access', tokens.access, accessOptions);
        res.cookie('x-refresh', tokens.refresh, refreshOptions);
    }


    deleteTokens( req, res ){
        res.clearCookie('x-access');
        res.clearCookie('x-refresh');
    }

    
    async refreshToken(req, res,  mode = 'send', rtoken =''){

        let payload;
        
        try{
            payload = jwt.verify(rtoken, process.env.JWT_REFRESH_SECRET);
            if( payload.type !== 'refresh' ){
                return handleErrors( 'Invalid token type!', mode, 400, req, res);
            } 
        } catch(e) {
            console.log(e.message);
            if( e instanceof jwt.TokenExpiredError ){
                return handleErrors( 'Refresh token expired!', mode, 400, req, res);
            } else if( e instanceof jwt.JsonWebTokenError ){
               return handleErrors( 'Invalid Refresh Token!', mode, 400, req, res);
            } else {
                return handleErrors('Token Refresh Error!', mode, 400, req, res);
            }
        }

        try{
            let token = await TOKEN.findOne({tokenid:  payload.tokenid }).exec();
            if(!token){
                return handleErrors( 'Refresh token is not found', mode, 401, req, res);
            }
            let tokens = await this.updateToken(token.userid);
            this.setTokens(tokens, req, res);
            if( mode === 'send'){
                return res.status(200).json(tokens);
            } else if( mode === 'return' ){
                return {
                    error: null,
                    userid: token.userid
                }
            }

        } catch(e){
            return handleErrors( e.message, mode, 500, req, res);
        }
    }

    parseToken(token, type = 'access'){
        
        let payload = {};
        let tokenData = {};
        const secret = ( type === 'access' ) ? process.env.JWT_ACCESS_SECRET : process.env.JWT_REFRESH_SECRET;

        if( type === 'access' ){
            tokenData = {userid: '', error: '', errno: 0};
        } else {
            tokenData = {tokenid: '', error: '', errno: 0};
        }

        try{
            payload = jwt.verify(token, secret);
            if( type === 'access' ){
                if( payload.userid ){
                    tokenData.userid = payload.userid;
                } else {
                    tokenData.errno = 9000;
                    tokenData.error = 'Invalid token payload!';
                }
            } else {
                if( payload.tokenid ){
                    tokenData.tokenid = payload.tokenid;
                } else {
                    tokenData.errno = 9000;
                    tokenData.error = 'Invalid token payload!';
                }
            }
            
        } catch (e){
            if( e instanceof jwt.TokenExpiredError ){
                tokenData.errno = 9001;
                tokenData.error = 'Expired Token!'
            } else if( e instanceof jwt.JsonWebTokenError ){
                tokenData.errno = 9002;
                tokenData.error = 'Token Error!'
            } else {
                tokenData.errno = 9003;
                tokenData.error = 'Invalid Token!'
            }
        }

        return tokenData;
    }

}

module.exports = new Token();