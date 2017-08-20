const bookshelf = require('../bookshelf');

const User = bookshelf.Model.extend(
  {
    tableName: 'users',
    products() {
      this.belongsToMany(Product).through(Cart);
    }
  }
);

const Product = bookshelf.Model.extend(
  {
    tableName: 'products',
    users() {
      this.belongsToMany(User).through(Cart);
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
    users() {
      this.belongsTo(User);
    },
    products() {
      this.belongsTo(Product);
    }
  }
);

module.exports = {
  User,
  Product,
  Category,
  Cart,
};
