const db = require('mongoose');
const config = require('./config/')
const User = require('./models/user');

db.connect(config.link, {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>{

        console.log('Connected to MongoDB!');

        User.find({})
        .then( results =>{
            
            results.forEach( rows => {
                console.log( rows );
            } );
            
        }).catch( e => {
            console.log(e);
        });

    }).catch( e => {
        console.log(e);
    });