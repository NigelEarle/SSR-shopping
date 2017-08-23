const { products } = require('../fixtures/products');

exports.seed = function(knex, Promise) {
  return knex('products').del()
    .then(function () {
      return knex('products').insert(products);
    });
};
