const express = require('express');
const { Cart } = require('../../models');
const { isAuthenticated } = require('../../utils/auth-middleware');
const router = express.Router();

// router.route('/') // fetch all products in cart from userid

router.post('/new', isAuthenticated, (req, res) => {
  const { id } = req.user;
  const { productId } = req.body;

  const payload = {
    user_id: id,
    product_id: productId,
  };

  Cart
  .forge(payload)
  .save()
  .then(data => {
    res
    .status(200)
    .json({ data });
  })
  .catch(error => {
    res
    .status(500)
    .json({ error });
  })

});

module.exports = router;