const express = require('express');
const { Cart } = require('../../models');
const { isAuthenticated } = require('../../utils/auth-middleware');
const router = express.Router();

router.get('/', isAuthenticated, (req, res) => {
  const { id } = req.user;
  // Query for all records with user id, return associate products
  Cart
  .where('user_id', id)
  .fetch({
    withRelated: ['products']
  })
  .then((data) => {
    console.log(data);
    res.send('hello')
  })
  .catch((err) => {
    console.log(err);
    res.send(err);
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