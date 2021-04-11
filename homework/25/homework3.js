//Table1  աղյուսակ ներմուծել մեկ տող:

const {db} = require('./mysql.con.db.js');

let sql = `INSERT INTO articles (title, description, content) VALUES('Hello World!', 'Dummy Article', 'Lorem ipsum...')`;

db.query(sql, (e) => {
    if(e) throw e.message;
});

db.end();