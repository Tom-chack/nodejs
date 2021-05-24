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
    tel: {
        type: Number
    }
}, {timestamps: true});


module.exports = model('User', schema, 'hm_28_users');