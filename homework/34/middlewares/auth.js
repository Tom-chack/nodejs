const authorize = (req, res, next)=>{

    passport.authenticate('jwt', {session:false})
    
    if(req.session.user){
        next();
    }else{
        res.redirect('/auth/login/');
    }
}

module.exports={
    authorize
}