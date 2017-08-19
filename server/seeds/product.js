const { products } = require('../fixtures/products');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      return knex('products').insert(products);
    });
};
