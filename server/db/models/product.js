"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ CartItem, Like, Review, FotoProduct, Category }) {
      this.hasMany(CartItem, { foreignKey: "productId" });
      this.hasMany(Like, { foreignKey: "productId" });
      this.hasMany(Review, { foreignKey: "productId" });
      this.hasMany(FotoProduct, { foreignKey: "productId" });
      this.belongsTo(Category, { foreignKey: "categoryId" });
      // define association here
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
