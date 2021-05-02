const express = require('express');
const passport = require('passport');
const router = express.Router();

const {home, initProfile, displayProfile} = require('../controllers/index');

router.get('/', home);

router.get('/profile/:id', displayProfile);

router.post('/', passport.authenticate('jwt', {session:false}), initProfile);



router.get('/favicon.ico', function(req, res, next) {
  res.status(204).end();
});

module.exports = router;
