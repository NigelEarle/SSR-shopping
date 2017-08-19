const { products } = require('../fixtures/products');

exports.seed = function(knex, Promise) {
  return knex('products').insert(products);
};