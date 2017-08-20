'use strict';
exports.up = function(knex) {
  return knex.schema
    .createTable('carts', function(table) {
      table.increments('id').primary();
      table.integer('user_id').references('users.id');
      table.integer('product_id').references('products.id');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};
exports.down = function(knex) {
  return knex.schema
    .dropTable('carts');
};