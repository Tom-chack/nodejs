const db = require('mongoose');
const config = require('./config/')
const User = require('./models/user');
const http = require('http');

db.connect(config.link, {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>{
        console.log('Connected to MongoDB!');
        http.createServer( (req, res) => {
            let html = '';
            User.findOne().select({_id:0, name:1, email:1, tel:1}).lean().then( document =>{
                html += '<ul>';
                for( let key in document ){
                    html += '<li>' + document[key] + '</li>' 
                }
                html += '</ul><hr>';
                res.setHeader('Content-Type', 'text/html');
                res.end(html);
            }).catch( e => {
               throw e;
            });
        }).listen(8007);
    }).catch( e => {
        console.log(e);
    });