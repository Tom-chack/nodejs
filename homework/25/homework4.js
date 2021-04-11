//4.Գրել կոդ , որ թույլ կտա Table1  աղյուսակ ներմուծել  միաժամանակ մի քանի տող:

const {db} = require('./mysql.con.db.js');

let sql = `INSERT INTO articles (title, description, content) 
                VALUES ('Hello World 1', 'Dummy Article 1', 'Lorem ipsum...'),
                       ('Hello World 2', 'Dummy Article 2', 'Lorem ipsum...'),
                       ('Hello World 3', 'Dummy Article 3', 'Lorem ipsum...');`;

db.query(sql, (e) => {
    if(e) throw e.message;
});

db.end();