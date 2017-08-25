const express = require('express');
const { Product } = require('../../models');

const router = express.Router();

router.use('/admin', require('./admin')); // admin routes on products

router.get('/', (req, res) => {
  Product.fetchAll()
  .then(allProducts => {
    res
    .status(200)
    .json({
      products: allProducts.serialize(),
    });
  })
  .catch(err => {
    res
    .status(500)
    .json({ err });
  });
});

router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  Product.where('id', productId)
  .fetch()
  .then(product => {
    res
    .status(200)
    .json({ product });
  })
  .catch( err => {
    res
    .status(500)
    .json({ err })
  })
});

module.exports = router;