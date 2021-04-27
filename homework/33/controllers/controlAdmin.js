const {_ARTICLE} = require('../models/modelArticle');

class Admin {

    async pageView(req, res){
        console.log(req.session);
        let articles = await _ARTICLE.find().sort('-createdAt').lean();
        res.render('admin', {articles});
    }
    
    async addArticle(req, res){
        res.render('article-form');
    }

    async saveArticle(req, res){
        try{
            let image = req.file.filename ? req.file.filename : '';
            let newArticle = await _ARTICLE.create({
                title: req.body.title,
                description: req.body.description,
                content: req.body.content,
                image: image
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