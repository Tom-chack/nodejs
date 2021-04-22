const {Schema, model} = require('mongoose');

const schemaAuthor = new Schema({
    name: {
        type: String,
        unique : true, 
        required : true
    },
    email: String
}, {timestamps: true});

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
}, {timestamps: true});

schemaAuthor.pre('save', function(next) {
    Author.find( {name: this.name}, function (err, docs) {
        if(!docs.length){
            next();
        } else {
            error = new Error();
            error.author = this;
            next(error);
        }
    })
})

const Author = model('Author', schemaAuthor, 'hw_29_author');
const Blog = model('Blog', schemaBlog, 'hw_29_blog');



module.exports = {
    Author,
    Blog
}

