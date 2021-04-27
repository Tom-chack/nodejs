const {_ARTICLE} = require('../models/modelArticle')

class Admin {

    async pageView(req, res){
        console.log(req.session);
        
        let articles = await _ARTICLE.find({}).sort('-createdAt').lean();
        
        let user = req.session.user;

        res.render('../views/admin.ejs', {user, articles});
    }
    
}


module.exports = new Admin();