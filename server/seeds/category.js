const { category } = require('../fixtures/category');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert(category);
    });
};
