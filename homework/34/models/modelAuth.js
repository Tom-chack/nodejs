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
}, {timestamps:true});

const _USER = model('User', schema, 'hw_33_users');

module.exports = {
    _USER
}

