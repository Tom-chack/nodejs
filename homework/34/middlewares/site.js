
module.exports = (req, res, next) => {
    console.log( req.isAuthenticated() );
    console.log( req.user );
    res.locals = {
        siteName: 'My Demo Site',
        isLogin:false,
        user: {}
    }
    next();
}