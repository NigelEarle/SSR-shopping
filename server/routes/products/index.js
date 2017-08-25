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

});

module.exports = router;