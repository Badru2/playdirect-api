const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define(
  "product",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    timestamps: true,
    paranoid: true,
  }
);

module.exports = Product;
