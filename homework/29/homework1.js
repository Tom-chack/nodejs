const db = require('mongoose');
const config = require('./config/')
const User = require('./models/user');

db.connect(config.link, {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>{

        console.log('Connected to MongoDB!');

        let id = '607ec10c0822d498d43e2ea5';
        User.findByIdAndDelete(id)
            .then( d => {
                console.log('Deleted!');
            }).catch(e =>{
                console.log(e);
            });

    }).catch( e => {
        console.log(e);
    });