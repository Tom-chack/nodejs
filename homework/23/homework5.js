//5.Գրել ծրագիր որ թույլ կտա վերբեռնել որևէ նկար, որից հետո բրաուզերում այդ նկարը  , որպես response:

const http = require('http');
const {createReadStream} = require('fs');
const {IncomingForm} = require('formidable');

const form = new IncomingForm();

http.createServer( ( req, res ) => {
    
    if( req.url === '/form' && req.method.toLowerCase() === 'post' ){

       form.parse(req, (e, fields, files) => {
            let readStream = createReadStream( files.myFile.path );
            readStream.pipe(res);
       });
       
    } else {
        res.end(formView());
    }

}).listen(8007);


function formView( message = '' ){
    return `<div>${message}</div>
            <form action="/form" method="POST" enctype="multipart/form-data">
                <input type="file" name="myFile">
                <input type="submit" value="upload">
            </form>`;
}