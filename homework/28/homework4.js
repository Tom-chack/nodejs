//4.Ստեղծել Form select դաշտ 1-ի 6 option-ներով , 
//որոնց մեջ  homework2s collection name է գրված: 
//Գրել ծրագիր որ կարտածի այցելու կողմից ընտրված name ունեցող անձի tel-ը:

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
                    User.findOne({_id: fields.id}).exec( (err, data) =>{
                        //Using data.toObject();
                        let document = data.toObject();
                        res.end( '<h3>' + document.tel + '</h3>' );
                    });
                });
            } else {
                //Using .lean() method;
                User.find().lean().then( documents => {
                    let html = '<form action="/save" method="POST"><select name="id">';
                    for( let document of documents ){
                        console.log(document);
                        html += '<option value="' + document._id + '">' + document.name + '</option>';
                    }
                    html += '</select><input type="submit" name="sned" value="Show Phone Number"></form>';
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