module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Product', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(12, 4),
      allowNull: false,
    }
  }, {
    classMethods: {
      associate(models) {
        Product.belongsTo(models.User);
      }
    }
  });
  return Products;
};