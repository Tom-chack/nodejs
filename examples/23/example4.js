//4.Գրել ծրագիր որ թույլ կտա վերբեռնել ֆայլ և պահպանել upload պապակայում ՝ պահպանելիս ընտրել պատահական անունը  
//անգլերենի տառերից և թվերից կազմված: Անվան երկարությունը առնվազն 5 սիմվոլ լինի:

const mv = require('mv');
const http = require('http');
const random = require('random');
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

                let filename = '';
                for(let i = 0; i < 5; i++){
                    filename += String.fromCharCode( random.int(65, 90) );
                }
                
               
                let oldFile = files.myFile.path;
                let ext = files.myFile.name.split('.')[1];
                let newFile = __dirname + '\\uploads\\' + filename + '.' + ext;
                console.log(newFile);
                
                mv(oldFile, newFile, (e) =>{
                    if(e) console.log(e);
                    console.log('Moved!');
                });

                res.end( 'Moved!' );

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