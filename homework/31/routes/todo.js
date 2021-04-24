
const express = require('express');

const {list, add1, add2, update, remove} = require('../controllers/todo');

let router = express.Router();

router.get('/', list);

// Version 1 - regular form submission
router.post('/', add1);
// Version 2 - using fetch() function
router.post('/add', add2); 

router.post('/update', update);

router.post('/delete', remove);

module.exports = router;