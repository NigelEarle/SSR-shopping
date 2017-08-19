const bookshelf = require('../bookshelf');

const User = bookshelf.Model.extend(
  {
    tableName: 'users',
  }
);

const Product = bookshelf.Model.extend(
  {
    tableName: 'products',

  }
);

const Category = bookshelf.Model.extend(
  {
    tableName: 'categories',
    products() {
      return this.hasMany(Product);
    }
  }
);

module.exports = {
  User,
  Product,
  Category,
};
