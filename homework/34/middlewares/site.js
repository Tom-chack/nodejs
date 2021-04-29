const localVariables = (req, res, next) => {
    res.locals = {
        siteName: 'My Demo Site',
        isLogin: false,
        user: {}
    }
    next();
}

module.exports = {
    localVariables
}