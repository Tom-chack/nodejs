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
        type: String,
        default: 'default.png'
    }
},
{
    timestamps: true
});

const USER = model('User', schema);
module.exports = {USER};