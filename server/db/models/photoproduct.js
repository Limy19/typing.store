"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PhotoProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      this.belongsTo(Product, { foreignKey: "productId" });
      // define association here
    }
  }
  PhotoProduct.init(
    {
      img: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      references: {
        model: "Products",
        key: "id",
      },
    },
    {
      sequelize,
      modelName: "PhotoProduct",
    }
  );
  return PhotoProduct;
};
