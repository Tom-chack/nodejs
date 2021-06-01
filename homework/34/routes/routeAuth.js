const express = require('express');
const { authorize } = require('../middlewares/auth');
const router = express.Router();
const {test, login, register} = require('../controllers/controlAuth');


router.get('/test', authorize, test);

router.post('/register', register);

router.post('/login', login);

module.exports = router;
