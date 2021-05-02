const {_USER} = require('../models/modelAuth');

class Home{

    home(req, res){
        res.render('index');
    }

    initProfile(req, res){
        // the passport middleware has already authorized this request and inserted user object in req, so we can call req.user
        // the code is located in config/pass.js, line 22
        if(req.user._id){
            res.json({user: req.user});
        } else {
            res.json({error:'User is not found'});
        }
    }

    async displayProfile(req, res){
        let userId = req.params.id;
        if( userId ){
            let user = await _USER.findById(userId);
            if( user ){
                return res.render('profile', {user});
            } 
        }
        res.render('error', {message: 'User is not found'});
    }

}

module.exports = new Home();