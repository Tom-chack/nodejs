const express = require('express');
const passport = require('passport');
const {uploadPhoto, resizePhoto} = require('../middlewares/upload');
const router = express.Router();

const {home, initProfile, displayProfile, updatePhoto} = require('../controllers/index');

router.get('/', home);

router.get('/profile/:id', displayProfile);

router.post('/update', passport.authenticate('jwt', {session:false}), uploadPhoto, resizePhoto, updatePhoto);

router.post('/', passport.authenticate('jwt', {session:false}), initProfile);

router.get('/favicon.ico', function(req, res, next) {
  res.status(204).end();
});

module.exports = router;
