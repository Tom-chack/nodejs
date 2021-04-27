class Admin {

    pageView(req, res){
        console.log(req.session);
        console.log(req.session.user.username);
        let username = req.session.user.username;
        res.render('../views/admin.ejs', {username});
    }
    
}


module.exports = new Admin();