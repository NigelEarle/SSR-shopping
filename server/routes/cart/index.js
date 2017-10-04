const express = require('express');
const { Cart } = require('../../models');
const { authMiddleware } = require('../utils/auth-middleware');
const router = express.Router();

router.route('/') // fetch all products in cart from userid

router.post('/new', authMiddleware, (req, res) => {
  const { id } = req.user;
  const { productId } = req.body
  const payload = {
    id,
    productId,
  }
  Cart
  .forge(payload)
  .save()
  .then(res => console.log(res))
  .catch(err => console.log(err))

})

module.exports = router;