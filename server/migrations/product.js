'use strict';
exports.up = function(knex) {
  return knex.schema
    .createTable('products', function(table) {
      table.increments('id').primary();
      table.string('title', 255);
      table.text('description');
      table.integer('inventory');
      table.decimal('price', 8, 2);
      table.integer('category_id').references('categories.id');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};
exports.down = function(knex) {
  return knex.schema
    .dropTable('products');
};