const {_ARTICLE} = require('../models/modelArticle');
const {unlink, access} = require('fs');
const { throws } = require('assert');
const path = require('path');

class Admin {

    async pageView(req, res){
        console.log(req.session);
        let articles = await _ARTICLE.find().sort('-createdAt').lean();
        res.render('admin', {articles});
    }
    
    async addArticle(req, res){
        let article = {};
        res.render('article-form', {article});
    }

    async editArticle(req, res){
        let article = await _ARTICLE.findById( req.params.id );
        res.render('article-form', {article});
    }

    async updateArticle(req, res){
        
        let article = await _ARTICLE.findById( req.params.id );
        
        article.title = req.body.title;
        article.description = req.body.description;
        article.content = req.body.content;
        if( req.file ) {
            if( article.image ){
                let oldFile = path.join(__dirname, '..', 'public', 'images', article.image);
                access( oldFile, (err)=>{
                    if(!err){
                        unlink( oldFile, (err) => {
                            if(err) throw err.message;
                        });
                    } else{
                        console.log( err );
                    }
                })
            }
            article.image = req.file.filename;
        }
        await article.save();
        res.redirect('/admin/');
    }

    async saveArticle(req, res){
        try{
            let newArticle = await _ARTICLE.create({
                title: req.body.title,
                description: req.body.description,
                content: req.body.content,
                image: req.file ? req.file.filename : null
            });
            console.log(newArticle);
            res.redirect('/admin/');
        } 
        catch(e){
            console.log(e.message);
            res.redirect(`/admin/add/`)
        }
    }
}


module.exports = new Admin();