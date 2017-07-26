const Promise = require('bluebird');
const SALT_ROUNDS = 10;
const bcrypt = Promise.promisifyAll(require('bcrypt'));

const checkPassword = (pass, hash) => bcrypt.compareAsync(pass, hash);

const hashPassword = pass => bcrypt.hashAsync(pass, SALT_ROUNDS);

module.exports = {
  checkPassword,
  hashPassword,
};
