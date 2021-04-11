// 5.  Գրել կոդ , որը կներմուծի Table1 այցելու կողմից տրված տվյալներով , ընդ որում , 
// այցելուն կցի նկարը, իսկ ծրագիրը նկարը պահպանի որևէ պապկայում իսկ Table1 imagename 
// դաշտում պահպանի այդ նկարի գտնվելու ճանապարհը:

const {db} = require('./mysql.con.db.js');
const {createServer} = require('http');
const {move} = require('fs-extra');
const {IncomingForm} = require('formidable');

const form = new IncomingForm();

createServer( (req, res) => {

    if( req.url == '/save' && req.method.toLowerCase() == 'post'){
        
        form.parse(req, async (e, fields, files) => {

            let oldPath = files.attachment.path;
            let newPath = __dirname + '\\uploads\\' + files.attachment.name;
            await move(oldPath, newPath);

            let title = db.escape(fields.title);
            let description = db.escape(fields.description);
            let filename = db.escape(files.attachment.name);

            let sql = `INSERT INTO images (title, description, imagename)  VALUES (${title}, ${description}, ${filename})`;

            db.query(sql);

            res.end( formView( 'Saved!' ) );

        });

    } else {
        res.end( formView() );
    }

}).listen(8007);


function formView( message = '' ){
    return `<div style="text-align: center">
                <div>${message}</div>
                <form action="/save" method="POST" enctype="multipart/form-data">
                    <input type="text" name="title" style="width: 300px; padding: 5px;"><br><br>
                    <input type="text" name="description" style="width: 300px; padding: 5px;"><br><br>
                    <input type="file" name="attachment">
                    <input type="submit" name="send" value="Send">
                </form>
            </div>`;
}