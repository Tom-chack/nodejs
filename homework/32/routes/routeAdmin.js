const express = require('express');
const {pageView} = require('../controllers/controlAdmin');
const {authorize} = require('../middlewares/auth');

const router = express.Router();

router.get('/', authorize,  pageView);

module.exports = router;
