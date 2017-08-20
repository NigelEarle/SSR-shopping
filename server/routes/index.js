const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/products', require('./products'));

module.exports = router;