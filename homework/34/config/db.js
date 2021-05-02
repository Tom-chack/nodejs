const mongoose = require('mongoose');
require(`dotenv`).config();

let DB_LINK = '';

if( process.env.NODE_ENV == 'production' ){
    DB_LINK = process.env.DB_STRING_PROD;
} else {
    DB_LINK = process.env.DB_STRING;
}

mongoose.connect( DB_LINK, { useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
    if(err) throw err;
    console.log(`Database connected, ENV: `, process.env.NODE_ENV)
});