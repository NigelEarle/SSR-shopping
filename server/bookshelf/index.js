const dbConfig = require('../db.js');
const knex = require('knex')(dbConfig);

module.exports = require('bookshelf')(knex);