const {Schema, model} = require('mongoose');

const schemaAuthor = new Schema({
    name: String,
    email: String
});

const schemaBlog = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    }
});

const Author = model('Author', schemaAuthor, 'hw_29_author');
const Blog = model('Blog', schemaBlog, 'hw_29_blog');

module.exports = {
    Author,
    Blog
}

