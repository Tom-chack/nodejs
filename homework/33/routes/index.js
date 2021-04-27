const express = require('express');
const { viewArticle } = require('../controllers/index');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/article/:id', viewArticle);


module.exports = router;
