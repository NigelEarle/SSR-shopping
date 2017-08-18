const dbConfig = require('../config/db');
const knex = require('knex')(dbConfig);

module.exports = require('bookshelf')(knex);