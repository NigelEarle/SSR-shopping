const bookshelf = require('../bookshelf');

const User = bookshelf.Model.extend(
  {
    tableName: 'users',
    products() {
      return this.belongsToMany(Product).through(Cart);
    }
  }
);

const Product = bookshelf.Model.extend(
  {
    tableName: 'products',
    users() {
      return this.belongsToMany(User).through(Cart);
    }
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

const Cart = bookshelf.Model.extend(
  {
    tableName: 'carts',
    user() {
      return this.belongsTo(User);
    },
    product() {
      return this.belongsTo(Product);
    }
  }
);

module.exports = {
  User,
  Product,
  Category,
  Cart,
};
