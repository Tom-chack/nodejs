const {USER} = require('../models/user');
const {passGenerator, passValidate} = require('../utils/helper');
const {updateToken, setTokens, deleteTokens} = require('./controlToken');
const path = require('path');
const fs = require('fs/promises');

let Auth = class {

    async login(req, res){
        res.render('login');
    }

    async register(reg, res){
        res.render('register');
    }

    async create(req, res){
        if(typeof req.body.email !== 'undefined'){
            try{
                let user = new USER({
                    username: req.body.username,
                    email: req.body.email,
                    password: passGenerator(req.body.password)
                });
                let newUser = await user.save();
                res.status(201).json({user: newUser, success: true});
                return;
            } catch(e){
                res.status(400).json({error: e.message, success: false});
            }
        } else {
            res.status(400).json({error: 'incorrect data', success: false});
        }
    }

    async signin(req, res){
        const {email, password} = req.body;
        try{
            let user = await USER.findOne({email}).exec();
            if( passValidate(password, user.password) ){
                let tokens = await updateToken(user._id);
                setTokens(tokens, req, res);
                return res.status(200).json(tokens);
            } else {
                res.status(401).json({error: 'Incorrect login credentials'});
            }
        } catch(e){
            res.status(400).json({error: e.message});
        }
    }

    account(req, res){
        if( res.locals.userid ){
            res.render('account');
            
        } else {
            res.redirect('/auth/login');
        }
    }

    async update(req, res){
        if( res.locals.userid && req.file ){
            try{
                let user = await USER.findById(res.locals.userid).exec();
                let oldPhoto = path.resolve(__dirname, '..', 'uploads', 'photos', user.photo.replace('-50x50', ''));
                let oldPhotoResized = path.resolve(__dirname, '..', 'public', 'images', 'photos', user.photo);
                user.photo = req.file.resized;
                await Promise.allSettled([
                    user.save(),
                    fs.unlink(oldPhoto),
                    fs.unlink(oldPhotoResized)
                ]);
                return res.status(200).json({photo: '/images/photos/' + user.photo });
            } catch(e){
                return res.status(400).json({error: e.message})
            }
        }
    }

    async logout(req, res){
        deleteTokens(req, res);
        res.redirect('/auth/login');
    }

}


module.exports = new Auth();