//5. Ստեղծել Form search  input-ով , որով այցելուն name  դաշտերում կփնտրի տրված արժեք սկսվող անունները,
// որից հետո որոնման արդյուքը կամ արդյքուները  հանդիսացող տեղերը կարտածվի թեգերի մեջ, օրինակ  name h1-ի մեջ:


const db = require('mongoose');
const config = require('./config/')
const User = require('./models/user');
const http = require('http');
const {IncomingForm} = require('formidable');

db.connect(config.link, {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>{
        console.log('Connected to MongoDB!');
        http.createServer( (req, res) => {
            if( req.url == '/save' ){
                let form = new IncomingForm();
                form.parse( req, (e, fields) => {
                    let phone = 'Not found';
                    let regexp = new RegExp(`^${fields.name}`, 'i');
                    User.find({name:regexp}, {_id:0, name:1}, {sort: {name: 1} } )
                        .lean()
                        .then( documents => {
                            documents.forEach( document => {
                                res.write( `<h2>${document.name}</h2>`);
                            });
                            res.end();
                    }).catch(e => {
                        throw e;
                    })
                });
            } else {
                User.find().lean().then( documents => {
                    let html = '<form action="/save" method="POST">';
                    html += '<input type="text" name="name" placeholder="Insert the name">';
                    html += '<input type="submit" name="sned" value="Show Phone Number"></form>';
                    res.setHeader('Content-Type', 'text/html');
                    res.end(html);
                }).catch(e => {
                    throw e;
                })
            }
        }).listen(8007);
    }).catch( e => {
        console.log(e);
    });