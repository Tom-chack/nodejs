
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
            if( req.url == '/save' ){
                let form = new IncomingForm();
                form.parse( req, (e, fields, files ) => {
                    const user = new User({
                        name: fields.name,
                        email: fields.email,
                        number: fields.number,
                        message: fields.message
                    });
                    user.save()
                    .then( result => {
                        res.end( JSON.stringify(result) );
                    })
                    .catch( error => {
                        throw error;
                    });
                });

            } else {
                let html = readFileSync('./public/form.html');
                res.setHeader('Content-Type', 'text/html');
                res.end(html);
            }
        }).listen(8007);
    })
    .catch( error => {
        throw error;
    });


