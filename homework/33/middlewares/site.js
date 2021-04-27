const localVariables = (req, res, next) => {
    res.locals = {
        isLogin: (req.session.user ? true : false),
        siteName: 'My Demo Site',
        user: (req.session.user ? req.session.user : {})
    }
    next();
}

module.exports = {
    localVariables
}