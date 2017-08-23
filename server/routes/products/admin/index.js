const express = require('express');
const { Product } = require('../../../models');
const { isAdmin } = require('../../../utils/auth-middleware');
const router = express.Router();

router.post('/new', isAdmin, (req, res) => {
  res.send('NEW');
});

router.put('/:productId/update', isAdmin, (req, res) => {
  res.send('UPDATE');
});

router.delete('/:productId/delete', isAdmin, (req, res) => {
  res.send('DELETE');
});

module.exports = router;