const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '_nodejs'
});

db.connect((e) => {
    if(e) throw e.message;
});

module.exports.db = db;