//Արտածել tableinfo առաջին տողի 4 դաշտերի  արժեքները համարակալված ցուցակի li-երի մեջ:

const {db} = require('./mysql.con.db.js');
const {createServer} = require('http');

createServer( (req, res) => {

    let sql = "SELECT * FROM `tableinfo` LIMIT 0, 1";
    db.query( sql, (e, results, fields) =>{

        if(e) throw e;

        let html = '<ol>';
        for( let field in results[0] ){
            html += `<li>${field}</li>`;
        }
        html += '</ol>';

        res.setHeader('Content-Type', 'text/html');
        res.end(html);

    });

}).listen(8007);