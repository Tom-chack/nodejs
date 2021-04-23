const {Schema, model} = require('mongoose');


const schema = Schema({
    task: {
        type: String
    },
    done: {
        type: Boolean,
        default: false
    }
}, 
{timestamps:true});

const TODO = model('Todo', schema);

module.exports = {TODO}

