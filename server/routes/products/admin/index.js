const express = require('express');
const { Product } = require('../../../models');
const { isAdmin } = require('../../../utils/auth-middleware');
const router = express.Router();

router.post('/new', isAdmin, (req, res) => {
  const {
    title,
    description,
    inventory,
    price,
    category_id,
  } = req.body;

  const payload = {
    title,
    description,
    inventory,
    price,
    category_id
  };
  
  Product.forge(payload)
  .save()
  .then(product => {
    res
    .status(200)
    .json({ product });
  })
  .catch(err => {
    res
    .status(500)
    .json({ err });
  })
});

router.put('/:productId/update', isAdmin, (req, res) => {
  res.send('UPDATE');
});

router.delete('/:productId/delete', isAdmin, (req, res) => {
  res.send('DELETE');
});

module.exports = router;