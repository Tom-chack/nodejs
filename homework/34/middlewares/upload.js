const fs = require('fs');
const path = require('path');
const multer = require('multer');
const sharp = require('sharp'); 
sharp.cache(false);

const dirPhotos =  path.resolve(__dirname, '..', 'uploads/photos');
const dirImages = path.resolve(__dirname, '..', 'public/images/photos');

const storagePhoto = multer.diskStorage({   //OR MemoryStorage //More engines are available from third parties.
    destination: function(req, file, callback){
        try{
            fs.accessSync(dirPhotos)
        } catch (e){
            fs.mkdirSync(dirPhotos, {recursive:true});
        }
        callback(null, dirPhotos);
    },
    filename: function(req, file, callback){
        let fullFileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        callback( null, fullFileName );
    }
});

const uploadPhoto = multer({
    storage: storagePhoto,
    limits: {
        fieldNameSize: 100,         //Max field name size                                           //default 100
        fieldSize: 2 * 1024 * 1024, //2MB / Max field value size (in bytes)                         //1 MB
        //fields: Infinity          //Max number of non-file fields                                 //Infinity
        //fileSize: Infinity        //For multipart forms, the max file size (in bytes) 	        //Infinity
        //files: Infinity 	        //For multipart forms, the max number of file fields 	        //Infinity
        //parts: Infinity       	//For multipart forms, the max number of parts (fields + files) //Infinity
        //headerPairs:2000 	        //For multipart forms, the max number of header key=>value pairs to parse 	2000
    },
    fileFilter: (req, file, callback) => {
        const TYPE_IMAGE = {
            'image/png': 'png',
            'image/jpeg': 'jpeg',
            'image/jpg': 'jpg'
        };
        //isValid = (!!TYPE_IMAGE[file.mimetype]) ? true : false;
        isValid = (file.mimetype.startsWith("image")) ? true : false;
        let error = isValid ? null : new Error('Invalid mime type!');
        callback(error, isValid);
      }
}).single('photo');

//...........> .array("photo");      // Accept a single file with the fieldname "photo". The single file will be stored in req.file.
//...........> .array("images", 10); //Accept an array of files, all with the "images" fieldname, limited 10. Optionally error out if more than maxCount files are uploaded. The array of files will be stored in req.files.
//...........> .fields(fields)       //Accept a mix of files, specified by fields. An object with arrays of files will be stored in req.files. 
//                     fields should be an array of objects with name and optionally a maxCount. Example:
//                            [ { name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 } ]

const resizePhoto = async (req, res, next) => {

    try{
        fs.accessSync(dirImages)
    } catch (e){
        fs.mkdirSync(dirImages, {recursive:true});
    }
    
    if( req.file ){

        let filename = String(req.file.filename);
        let thumbFileName = filename.replace(/(.+)(\.[^\.]+)/, '$1-50x50$2');

        await sharp(req.file.path)
            .resize(50, 50, {
                fit: 'cover',
                position: 'center'
            })
            .toFormat("jpeg")
            .jpeg({ quality: 90 })
            .toFile( dirImages + '/' + thumbFileName )
             
            //fs.unlinkSync(req.file.path);
            req.file.resized = thumbFileName;

    } else if( req.files ){

        await Promise.all([
            req.files.map(async file => {
                let thumbFileName = file.fieldname + '-' + Date.now() + '-50x50' + path.extname(file.originalname);
                await sharp(file.buffer) //file.path
                    .resize(50, 50, {
                        fit: 'cover',
                        position: 'center'
                    })
                    .toFormat("jpeg")
                    .jpeg({ quality: 90 })
                    .toFile( dirImages + '/' + thumbFileName );
                    file.resized = thumbFileName;
            })
        ])
    }
    return next();
} 


module.exports = {
    uploadPhoto,
    resizePhoto
}

// Error handling //////////////////////////////////
// app.post('/profile', function (req, res) {
//     upload(req, res, function (err) {
//       if (err instanceof multer.MulterError) {
//         // A Multer error occurred when uploading.
//       } else if (err) {
//         // An unknown error occurred when uploading.
//       }
   
//       // Everything went fine.
//     })
//   })

/////////////////////////////////////////////////////
// const TYPE_IMAGE = {
//     'image/png': 'png',
//     'image/jpeg': 'jpeg',
//     'image/jpg': 'jpg'
//   };
//   const upload = multer({
//     storage: multer.diskStorage({
//       destination: path.join( __dirname, `..`, `/public/images`),
//       filename: (req, file, callback)=>{
//           callback(null, Date.now() + '-' + file.originalname)
//       }
//     }),
//     limits: {
//       fieldSize: 2 * 1024 * 1024, //2MB
//     },
//     fileFilter: (req, file, callback) => {
//       let isValid =false;
//       isValid = (!!TYPE_IMAGE[file.mimetype]) ? true : false;
//       let error = isValid ? null : new Error('Invalid mime type!');
//       callback(error, isValid);
//     }
//   }).single(`image`);