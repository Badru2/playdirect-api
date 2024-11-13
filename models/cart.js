const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cart = sequelize.define(
  "cart",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "carts",
    timestamps: true,
  }
);

module.exports = Cart;
