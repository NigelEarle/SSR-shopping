const express = require('express');
const { Product } = require('../../models');

const router = express.Router();

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

router.post('/new', /* admin middleware */, (req, res) => {

});

router.get('/:productId', /* admin middleware */, (req, res) => {

});

router.put('/:productId/update', /* admin middleware */, (req, res) => {

});

router.delete('/:productId/delete', /* admin middleware */, (req, res) => {

});

module.exports = router;