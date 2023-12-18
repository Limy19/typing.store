"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cart, Remont, Like, Review }) {
      console.log(Remont,'Remont');
      this.hasMany(Cart, { foreignKey: "userId" });
      this.hasMany(Remont, { foreignKey: "userId" });
      this.hasMany(Like, { foreignKey: "userId" });
      this.hasMany(Review, { foreignKey: "userId" });
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
