//4.Ստեղծել էջ, որում կա  Form select դաշտ 1-ի 6 option-ներով , 
// որոնց մեջ  աղյուսակի name-երի արժեքներն  է գրված: 
// Գրել ծրագիր որ կարտածի այցելու կողմից ընտրված անվանը(name)  համարժեք տող ունեցող email արժեքը:

const {db} = require('./mysql.con.db.js');
const {createServer} = require('http');
const {IncomingForm} = require('formidable');

const form = new IncomingForm();

createServer( (req, res) => {
    if(req.url == '/data'){
        form.parse(req, (e, fields, files) => {
            if(e) throw e;
            let sql = "SELECT email FROM `tableinfo` WHERE `id` = " + parseInt(fields.id);
            db.query( sql, (e, results) => {
                if(e) throw e;
                res.end(`Email address: ${results[0].email}`);
            });
        });
    } else {
        let sql = "SELECT * FROM `tableinfo` ORDER BY `email` ASC";
        db.query( sql, (e, results, fields) =>{
            if(e) throw e;
            let table = '<form action="/data" method="post"><select name="id">';
            for( let {id, name, email, mobile} of results ){
                table += `<option value="${id}">${name}</option>`;
            }
            table += '</select> <input type="submit" name="Send" value="Sned"></form>';
            res.end(table);
        });
    }


}).listen(8007);