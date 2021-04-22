// 3.Model պապկայում  ստեղծել models.js ֆայլ, որի մեջ ստեղծել երկու մոդել User:
// User ունի  name, email :
// Blog ունի  title, auther, body որտեղ auther հղում  է դեպի User մոդել:
// Ստեղծել User, Blog մոդելներ համապատասխանաբար users, blogs անուն ունեցող collection համար և արտահանել մոդելները:

const db = require('mongoose');
const config = require('./config/')
const {Author, Blog} = require('./models/blog');

db.connect(config.link, {useUnifiedTopology:true, useNewUrlParser:true})
  .then( () => {

    Blog.find({})
        .populate('author')
        .then( blogs => {
            //Whatever you want to do...
        })
        .catch(e => {
            throw e.message;
        })

  }).catch(e => {
        throw e.message;
});
