const fs = require('fs');
const path = require('path');
const multer = require('multer');
const sharp = require('sharp');
sharp.cache(false);

const dirPhotos = path.resolve(__dirname, '..', 'uploads', 'photos');
const dirImages = path.resolve(__dirname, '..', 'public', 'images', 'photos');


const storagePhoto = multer.diskStorage({
    destination: function(req, file, callback){
        try{
            fs.accessSync(dirPhotos);
        } catch(e){
            fs.mkdirSync(dirPhotos, {recursive:true});
        }
        callback(null, dirPhotos);
    },
    filename: function(req, file, callback){
        let fullFileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        callback(null, fullFileName);
    }
});

const uploadPhoto = multer({
    storage: storagePhoto,
    limits: {
        fileSize: 10 * 1024 * 1024,
        fieldNameSize: 100
    },
    fileFilter: (req, file, callback) =>{
        let isValid = file.mimetype.startsWith('image') ? true : false;
        let error = isValid ? null : new Error('Invalid mime type!');
        callback(error, isValid);
    }
}).single('photo'); //req.file 

// .array('gallery', 10); //req.file[0] 
// .fields( fields )      //req.files 
//          fields = [{name: 'avatar', maxCont: 1}, {name: 'gallery', maxCount: 10}]

const resizePhoto = async (req, res, next) =>{
    try{
        fs.accessSync(dirImages);
    } catch(e){
        fs.mkdirSync(dirImages, {recursive:true});
    }

    if(req.file){
        let filename = String(req.file.filename);
        let thumb = filename.replace(/(.+)(\.[^\.]+)/, '$1-50x50$2');
        await sharp(req.file.path)
            .resize(50, 50, {
                fit: 'cover',
                position: 'center'
            })
            .toFormat('jpeg')
            .jpeg({quality: 90})
            .toFile( dirImages + '/' + thumb);
            req.file.resized = thumb;
    }
    return next();
}

module.exports = {
    uploadPhoto,
    resizePhoto
}