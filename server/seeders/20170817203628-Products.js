'use strict';
const { products } = require('../fixtures/products');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', products, {});
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Products', null, {});
  }
};
