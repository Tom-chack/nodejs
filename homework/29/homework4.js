

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
        let form = readFileSync('./public/authors.html');

        if(req.query.message) res.write('<h3>' + req.query.message + '</h3>');

        res.write(form);

        Author.find({}, {_id:0}, {createdAt: 'desc'})
            .lean()
            .then( authors => {
                res.write('<ul>');
                authors.forEach( author => {
                    res.write('<li>' + author.name + ' | ' + author.email +'</li>');
                });
                res.write('</ul>');
                res.end();
            });
    });

    app.post('/author', (req, res)=> {

        Author.create({
            name: req.body.name,
            email: req.body.email
        })
        .then( author => {
            res.redirect('/');
        })
        .catch( e => {
            if(e.author){
                res.redirect( '/?message=' + encodeURIComponent('Author ' + req.body.name + ' exists!') );
            } else {
                throw e;
            }
        })
    });
    
    app.listen('8007');

  }).catch(e => {
        throw e.message;
});

