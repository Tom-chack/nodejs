const db = require('mongoose');
const config = require('./config/')
const User = require('./models/user');

db.connect(config.link, {useUnifiedTopology:true, useNewUrlParser:true})
    .then(()=>{

        console.log('Connected to MongoDB!');

        let documents = [   {name:'Anna', email:'Anna@gmail.com', tel:'9210053520'},
                            {name:'Maria', email:'Maria@gmail.com', tel:'9810098100'},
                            {name:'Lara', email:'Lara@gmail.com', tel:'9210053520'},
                            {name:'Mery', email:'Mery@gmail.com', tel:'9810098100'},
                            {name:'Greta', email:'Greta@gmail.com', tel:'9210053520'},
                            {name:'Sirun', email:'Sirun@gmail.com', tel:'9810098100'}
                        ];
        
        User.insertMany( documents )
        .then( result =>{
            console.log(result.insertedCount);
        }).catch( e => {
            console.log(e);
        })

    }).catch( e => {
        console.log(e);
    })