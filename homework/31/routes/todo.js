
const express = require('express');

const {list, add, update, remove} = require('../controllers/todo');

let router = express.Router();

router.get('/', list);

router.post('/', add);

router.post('/add', add);

router.post('/update', update);

router.post('/delete', remove);

module.exports = router;