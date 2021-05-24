//5.Գրել ծրագիր որ թույլ կտա վերբեռնել examples.txt ֆայլը,
// որից հետո բրաուզերում տեսնել վերբենված ֆայլի պարունակությունը , որպես response:


const fs = require('fs');
const http = require('http');
const formidable = require('formidable');


http.createServer( (req, res) => {
    if( req.url == '/upload' ){
        
        let form = new formidable.IncomingForm();
        
        form.parse(req, (err, fields, files) => {
            
            if(err){
                console.log(err);
                return;  
            } 

           try{
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                let oldFile = files.myFile.path;
                let readFile = fs.readFileSync(oldFile, 'utf-8');
                res.end( readFile );

           } catch( e ){
               console.log(e);
               res.end( e.message );
           }


        });

    } else {
        res.end( formView() );
    }
}).listen(8007);




function formView(){

    return `<form action="/upload" method="POST" enctype="multipart/form-data">
                <input type="file" name="myFile">
                <input type="submit" value="upload">
            </form>`;
}