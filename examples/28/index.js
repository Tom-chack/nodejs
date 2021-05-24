
const db = require('mongoose');
const http = require('http');
const config = require('./config/')
const User = require('./models/user');
const {readFileSync} = require('fs');
const {IncomingForm} = require('formidable');


db.connect(config.link, {useUnifiedTopology:true, useNewUrlParser:true})
    .then( result => {
        console.log('Connected to MongoDB!');
        http.createServer( (req, res) => {

            

        }).listen(8007);
    })
    .catch( error => {
        throw error;
    });


