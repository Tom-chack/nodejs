//2. Ստեղծել Example Database-ում table1 անունով աղյուսակ՝ id, title,description,content,imgname դաշտերով:

const {db} = require('./mysql.con.db.js');

let sql = `CREATE TABLE IF NOT EXISTS articles (
                id INT(11) NOT NULL AUTO_INCREMENT,
                title VARCHAR(255) COLLATE utf8mb4_unicode_ci NOT NULL,
                description TEXT COLLATE utf8mb4_unicode_ci NOT NULL,
                content LONGTEXT COLLATE utf8mb4_unicode_ci NOT NULL,
                PRIMARY KEY (id)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`;

db.query( sql, (e) => {
    if(e) throw e.message;
});

db.end();