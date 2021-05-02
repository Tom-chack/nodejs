const {_USER} = require('../models/modelAuth');
const {passGenerate, passValidate, jwtGenerate} = require('../utils/passUtils');

class Auth {

    async test(req, res){

        res.json({success: true, message: 'You are authorized!'});
        
    }

   
    async login(req, res){
        try{
            let email = req.body.email;
            let password = req.body.password;
            if( email && password ){
                let user = await _USER.findOne({email:email});
                if( !user ){
                    return res.status(401).json( {success: false, error: 'User is not found!'} );
                }
                if( !passValidate( password, user.password) )  {
                    return res.status(401).json( {success: false, error: 'Email or Password is Incorrect'} );
                }
                const jwt = jwtGenerate(user);
                return res.json({ success: true, 
                                  user: user,
                                  tocken: jwt.token,
                                  expiresIn: jwt.expires
                                });

            }
            res.json({error: 'Please insert your email and password'});
        }
        catch(e){
            res.json({error: e.message});
        }
    }


    async register(req, res, next){
        let username = req.body.username;
        let email = req.body.email;
        let password = passGenerate(req.body.password);
        if( username && email && password ){
            try {
                const newUser = new _USER({
                    username: username,
                    email: email,
                    password: password
                });
                await newUser.save()
                    .then(( user ) => {
                        const jwt = jwtGenerate(user);
                        return res.json({ success: true, 
                                          user: user,
                                          tocken: jwt.token,
                                          expiresIn: jwt.expires
                                    });
                    })
                    .catch( err => next(err));
            } 
            catch(e) {
                return res.json({error: e.message});
            }
        }
        res.json({error: 'Please fill all required fields'});
    }



}

module.exports = new Auth();