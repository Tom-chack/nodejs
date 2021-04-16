const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number
    },
    message: {
        type: String
    }
}, {timestamps: true});


module.exports = model('User', schema, 'hm_27_users');