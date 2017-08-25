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

  Product
  .forge(payload)
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

router.put('/:id/update', isAdmin, (req, res) => {
  const { id } = req.params;

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
    category_id,
    updated_at: new Date,
  };

  Product
  .forge({ id })
  .save(payload)
  .then(product => {
    res
    .status(200)
    .json({ product })
  })
  .catch(err => {
    res
    .status(500)
    .json({ err })
  })
});

router.delete('/:id/delete', isAdmin, (req, res) => {
  const { id } = req.params;
  Product
  .forge({ id })
  .destroy()
  .then(result => {
    res
    .status(200)
    .json({ success : true });
  })
  .catch(err => {
    res
    .status(500)
    .json({ err });
  })
});

module.exports = router;