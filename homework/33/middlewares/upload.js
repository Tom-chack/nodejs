//File uploading and processing modules
const path = require('path');
const sharp = require('sharp');
const multer = require('multer');
const TYPE_IMAGE = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg'
};
const upload = multer({
  storage: multer.diskStorage({
    destination: path.join( __dirname, `..`, `/public/images`),
    filename: (req, file, callback)=>{
        callback(null, Date.now() + '-' + file.originalname)
    }
  }),
  limits: {
    fieldSize: 2 * 1024 * 1024, //2MB
  },
  fileFilter: (req, file, callback) => {
    let isValid =false;
    isValid = (!!TYPE_IMAGE[file.mimetype]) ? true : false;
    let error = isValid ? null : new Error('Invalid mime type!');
    callback(error, isValid);
  }
}).single(`image`);

module.exports = {
    upload
}