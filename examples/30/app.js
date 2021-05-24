const db = require('mongoose');
const config = require('./config/')
const User = require('./models/user');



db.connect(config.link, {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>{


    }).catch(e=>{
        throw e;
    })
