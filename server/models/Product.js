module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    inventory: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate(models) {
        Product.belongsTo(models.User);
      }
    }
  });
 return Task;
};