const express = require('express');
const {login, create} = require('../controllers/controlAuth');

const router = express.Router();


router.get('/login/', function(req, res) {
  res.render('../views/login.ejs');
});

router.get('/register/', function(req, res) {
  res.render('../views/register.ejs');
});

router.post('/login/', login);

router.post('/register/', create);

router.get('/logout/', function(req, res) {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
