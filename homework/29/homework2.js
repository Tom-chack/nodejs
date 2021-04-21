const db = require('mongoose');
const config = require('./config/')
const User = require('./models/user');
const {createServer} = require('http');

db.connect(config.link, {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>{

        console.log('Connected to MongoDB!');

        createServer((req, res) => {

            res.setHeader('Content-Type', 'text/html');

            const url = new URL( 'http://' + req.headers.host + req.url );
            let page = url.searchParams.get('page') || 0;

            if( url.searchParams.has('page') ){

                User.find({})
                .lean()
                .skip(+page)
                .limit(1)
                .then( document => {

                    res.write('<h2>' + document[0].name + '</h2>')
                    res.end(navigation());

                }).catch(e=>{
                    throw e;
                })

            } else {
                res.end(navigation());
            }

        }).listen(8007);
        

    }).catch( e => {
        console.log(e);
    });


    function navigation(){
        return `<nav style="text-align:center; padding: 20px;">
                    <a href="/?page=1">Page1</a> | 
                    <a href="/?page=2">Page2</a> | 
                    <a href="/?page=3">Page3</a> | 
                    <a href="/?page=4">Page4</a>
                </nav>`;
    }