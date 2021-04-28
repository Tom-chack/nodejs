const express = require('express');
const { viewArticle } = require('../controllers/index');

const router = express.Router();

router.get('favicon.ico', function(req, res, next) {
  res.status(204).end();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/article/:id', viewArticle);


module.exports = router;
