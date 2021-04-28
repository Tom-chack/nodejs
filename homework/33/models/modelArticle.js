const { Schema, model } = require("mongoose");

const schema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    image: {
        type: String
    }
}, {timestamps: true});

const _ARTICLE = model('Article', schema);

module.exports = {
    _ARTICLE
}