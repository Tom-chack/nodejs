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
    },
    photo: {
        type:String,
        default: 'default.png'
    }
}, {timestamps:true});

const _USER = model('User', schema, 'hw_33_users');

module.exports = {
    _USER
}

