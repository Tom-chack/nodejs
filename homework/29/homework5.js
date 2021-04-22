

const db = require('mongoose');
const config = require('./config/')
const {Author, Blog} = require('./models/blog');
const {readFileSync} = require('fs');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.connect(config.link, {useUnifiedTopology:true, useNewUrlParser:true, useCreateIndex: true})
  .then( () => {

    app.get('/', (req, res)=> {
        
        res.set('Content-Type', 'text/html');
        let form = readFileSync('./public/blogs.html', {encoding:'utf-8'});
        
        Author.find({}, {name:1})
            .lean()
            .then( authors => {
                let author_options = 'Author: <select name="author_id">';
                authors.forEach( author => {
                    author_options += `<option value="${author._id}">${author.name}</option>`;
                });
                author_options += '</select>'; 
                form = form.replace(/\{authors\}/g, author_options);
                res.write(form);
                Blog.find({}, {_id:0})
                    .populate('author')
                    .sort('-createdAt')
                    .lean()
                    .then( blogs => {
                        res.write('<ul>');
                        blogs.forEach( blog => {
                            res.write('<li>Title: ' + blog.title + ' | Author: ' + blog.author.name +' | Body: ' + blog.body + '</li>');
                        });
                        res.write('</ul>');
                        res.end();
                    }).catch( e=> {
                        res.end('<h4>No blogs found!</h4>');
                    })
            })
            .catch(e=>{
                throw e;
            })
    });

    app.post('/blog', (req, res)=> {
        Blog.create({
            title: req.body.title,
            author: req.body.author_id,
            body: req.body.body
        })
        .then( blog => {
            res.redirect('/');
        })
        .catch( e => {
            throw e;
        })
    });
    
    app.listen('8007');

  }).catch(e => {
        throw e.message;
});

