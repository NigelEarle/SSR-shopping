const { category } = require('../fixtures/category');

exports.seed = function(knex, Promise) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert(category);
    });
};
