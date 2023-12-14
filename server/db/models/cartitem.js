"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product, Cart }) {
      this.belongsTo(Product, { foreignKey: "productId" });
      this.belongsTo(Cart, { foreignKey: "cartId" });
      // define association here
    }
  }
  CartItem.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
        },
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Carts",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "CartItem",
    }
  );
  return CartItem;
};
