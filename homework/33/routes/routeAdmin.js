const express = require('express');
const {pageView, addArticle, saveArticle, editArticle, updateArticle} = require('../controllers/controlAdmin');
const {authorize} = require('../middlewares/auth');
const {upload} = require('../middlewares/upload');


const router = express.Router();

router.get('/', authorize,  pageView);

router.get('/add', authorize, addArticle);

router.get('/edit/:id', authorize, editArticle);

router.post('/edit/:id', authorize, upload, updateArticle);

router.post('/add', authorize, upload, saveArticle);

module.exports = router;
