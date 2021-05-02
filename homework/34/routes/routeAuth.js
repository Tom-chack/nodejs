const express = require('express');
const passport = require('passport');
const router = express.Router();
const {test, login, register} = require('../controllers/controlAuth');


router.get('/test', passport.authenticate('jwt', {session:false}), test);

router.post('/register', register);

router.post('/login', login);

module.exports = router;
