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
  }
);

module.exports = {
  User,
  Product,
  Category,
};
