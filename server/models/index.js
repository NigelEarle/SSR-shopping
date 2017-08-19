const bookshelf = require('../bookshelf');

const User = bookshelf.Model.extend(
  {
    tableName: 'Users',
  }
);

const Product = bookshelf.Model.extend(
  {
    tableName: 'Products',

  }
);

const Category = bookshelf.Model.extend(
  {
    tableName: 'Categories',
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
