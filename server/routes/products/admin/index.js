const express = require('express');
const { Product } = require('../../../models');
const router = express.Router();

router.post('/new', /* admin middleware */, (req, res) => {

});

router.put('/:productId/update', /* admin middleware */, (req, res) => {

});

router.delete('/:productId/delete', /* admin middleware */, (req, res) => {

});

module.exports = router;