const express = require('express');
const { Cart, User } = require('../../models');
const { isAuthenticated } = require('../../utils/auth-middleware');
const router = express.Router();

router.get('/', isAuthenticated, (req, res) => {
  const { id } = req.user;

  Cart
  .where('user_id', id)
  .fetchAll({
    withRelated: ['product']
  })
  .then((data) => {
    res
    .status(200)
    .json({ data });
  })
  .catch((err) => {
    res
    .status(500)
    .json({ err });
  });
});


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