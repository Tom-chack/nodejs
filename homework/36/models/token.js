require('dotenv').config();
const {Schema, model} = require('mongoose');

const schema = Schema({
    tokenid: {
        type: String
    },
    userid: {
        type: String
    },
    expireAt:{
        type: Date,
        default: Date.now,
        expires: process.env.JWT_REFRESH_EXPIN
    }
},
{
    timestamps: true
});

const TOKEN = model('Token', schema);
module.exports = {TOKEN};