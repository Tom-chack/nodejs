const localVariables = (req, res, next) => {
    res.locals = {
        isLogin: (req.session.user ? true : false),
        siteName: 'My Demo Site'
    }
    next();
}

module.exports = {
    localVariables
}