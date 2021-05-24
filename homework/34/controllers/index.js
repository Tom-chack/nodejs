const fs = require('fs/promises');
const path = require('path');
const {_USER} = require('../models/modelAuth');


class Home{


    home(req, res){
        res.render('index');
    }


    initProfile(req, res){
        // the passport middleware has already authorized this request and inserted user object in req, so we can call req.user
        // the code is located in config/pass.js, line 22
        if(req.user._id){
            res.status(200).json({user: req.user});
        } else {
            res.status(401).json({error:'User is not found'});
        }
    }


    async displayProfile(req, res){
        if(req.params.id){
            let userId = req.params.id;
            try{
                let user = await _USER.findById(userId).exec();
                return res.render('profile', {user});
            } catch(e){
                return res.status(401).json({error: e});
            }
        }
        return res.status(401).json({error: 'Profile ID is not found!'});
    }


    async updatePhoto(req, res){

        let userId = req.user._id;

        if( userId ){

            if(req.file){

                //req.file = 
                // {
                //   fieldname: 'photo',
                //   originalname: 'Claude-Monet-Waterlilies-and-Japanese-Bridge.jpg',
                //   encoding: '7bit',
                //   mimetype: 'image/jpeg',
                //   destination: 'D:\\OSPanel\\domains\\localhost\\nodejs\\homework\\34\\uploads\\photos',
                //   filename: 'photo-1621768479762.jpg',
                //   path: 'D:\\OSPanel\\domains\\localhost\\nodejs\\homework\\34\\uploads\\photos\\photo-1621768479762.jpg',
                //   size: 3715126,
                //   resized: 'photo-1621768479794-50x50.jpg'
                //   }

                try{
                    
                    let user = await _USER.findById(userId).exec();

                    let oldPhoto = path.resolve(__dirname, '..', 'uploads/photos', user.photo.replace('-50x50', ''));
                    let oldPhotoResized = path.resolve(__dirname, '..', 'public/images/photos', user.photo);

                    user.photo = req.file.resized;

                    await Promise.allSettled([
                        user.save(),
                        fs.unlink( oldPhoto ),
                        fs.unlink( oldPhotoResized )
                    ]);

                    return res.status(200).json({photo: '/images/photos/' + user.photo });

                } catch(e){
                    return res.status(401).json({error: e.message });
                }
            } else{
                return res.status(401).json({error:'File uploading error'});
            }
        }
        return res.status(401).json({error:'User is not found'});
    }


}

module.exports = new Home();