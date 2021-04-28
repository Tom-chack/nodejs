const {_ARTICLE} = require('../models/modelArticle');

class Article {
    async viewArticle(req, res){

        let article = await _ARTICLE.findById(req.params.id);
        res.render('article', {article});

    }
}

module.exports = new Article();