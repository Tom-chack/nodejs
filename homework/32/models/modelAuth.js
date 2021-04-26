const {Schema, model} = require('mongoose');


const schema = Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, 
{timestamps:true});

const _USER = model('User', schema);

module.exports = {
    _USER
}

