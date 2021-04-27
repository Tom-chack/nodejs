const {_USER} = require('../models/modelAuth');
const bcrypt = require('bcryptjs')

class Auth {

    async login(req, res){
        try{
            console.log(req.session);

            let email = req.body.email;
            let password = req.body.password;

            if( !password ){
                res.render('../views/login.ejs', {message: 'Invalid Email or Password'})
            }

            let user = await _USER.findOne({email:email});

            console.log(req.body.password, user.password);

            let okPassword = bcrypt.compareSync(req.body.password, user.password);
            if(!okPassword){
                return  res.render('../views/login.ejs', {message:`Invalid Email or Password`}) 
            }

            req.session.user = user;
            res.redirect(`/admin`)

        }
        catch(e){
            res.render('../views/login.ejs', {message: e.message} );
        }
    }

    async create(req, res){
        try{
            await _USER.create({
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password),
            });
            if( req.session.views ) {
                req.session.views++;
            } else {
                req.session.views = 1;
            }
            console.log(req.session);
            res.redirect('/auth/login/');
        } 
        catch(e) {
            res.render('../views/register.ejs', {message: e.message} );
        }
    }


}

module.exports = new Auth();