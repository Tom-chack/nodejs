const {_USER} = require('../models/modelAuth');
const bcrypt = require('bcryptjs');

class Auth {

    async login(req, res){

        try{
            let email = req.body.email;
            let password = req.body.password;

            if( email && password ){
                let user = await _USER.findOne({email:email});
                let okPassword = bcrypt.compareSync(password, user.password);
                if(!okPassword){
                    return  res.json({error: 'Email or Password is Incorrect'});
                }
                return res.json({tocken:'Hi!'});
            }
            res.json({error: 'Please insert your email and password'});
        }
        catch(e){
            res.json({error: e.message});
        }
    }

    async register(req, res){

        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.password;

        if( username && email && password ){
            try {
                await _USER.create({
                    username: username,
                    email: email,
                    password: bcrypt.hashSync(password),
                });
                return res.json({success:1});
            } 
            catch(e) {
                return res.json({error: e.message});
            }
        }
        res.json({error: 'Please fill all required fields'});
    }


}

module.exports = new Auth();