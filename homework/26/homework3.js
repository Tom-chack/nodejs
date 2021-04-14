//3.Tableinfo պարունակությունը արտածել աղյուսակում ըստ email աճման կարգով:

const {db} = require('./mysql.con.db.js');
const {createServer} = require('http');

createServer( (req, res) => {

    let sql = "SELECT * FROM `tableinfo` ORDER BY `email` ASC";
    db.query( sql, (e, results, fields) =>{

        if(e) throw e;

        let table = '<table border="">';
        for( let {id, name, email, mobile} of results ){
            table += `<tr><td>${id}</td><td>${name}</td><td>${email}</td><td>${mobile}</td></tr>`;
        }
        table += '</table>';

        res.end(table);

    });

}).listen(8007);