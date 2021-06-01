const express = require('express');
const {login, register, create, signin, account, update, logout} = require('../controllers/controlAuth');
const {protect} = require('../middlewares/authorize');
const {uploadPhoto, resizePhoto} = require('../middlewares/uploads');

const router = express.Router();


router.get('/login', login);

router.get('/register', register);

router.get('/account', protect, account);

router.post('/update', protect, uploadPhoto, resizePhoto, update);

router.post('/create', create);

router.post('/signin', signin);

router.get('/logout', logout);



module.exports = router;
