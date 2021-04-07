// 4.Գրել ծրագիր որ թույլ կտա վերբեռնել ֆայլ և պահպանել Homework պապկայի upload պապակայում ՝ 
// պահպանելիս ընտրել պատահական 6-անիշ թվերից կազմված անուն:

const http = require('http');
const random = require('random');
const {accessSync, mkdirSync} = require('fs');
const {move} = require('fs-extra');
const {IncomingForm} = require('formidable');

const form = new IncomingForm();

http.createServer( ( req, res ) => {
    
    if( req.url === '/form' && req.method.toLowerCase() === 'post' ){
       
       try{
            accessSync('./upload');
       } catch(e){
           mkdirSync('./upload');
       }

       form.parse(req, (e, fields, files) => {
            let oldFile = files.myFile.path;
            let newFile = __dirname + '\\upload\\' + random.int(1e5,9e5) + '.' + files.myFile.type.split('/')[1];
            move( oldFile, newFile, (e) => {
                if(e) {
                    res.end( formView( e.message ) );
                } else {
                    res.end('Moved!');
                }
            });
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