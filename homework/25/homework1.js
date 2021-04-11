//1. Ստեղծել   Datebase  Example անունով:

const {db} = require('./mysql.con.js');

db.query(`CREATE DATABASE IF NOT EXISTS _nodejs`, (e) => {
    if(e) throw e.message;
});

db.end();