const Cart = require("../models/cart");

const CreateCart = async (req, res) => {
  const { user_id, product_id, quantity } = req.body;

  try {
    const cart = await Cart.create({
      user_id,
      product_id,
      quantity,
    });

    res.status(201).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const GetCarts = async (req, res) => {
  const { user_id } = req.query;

  try {
    const carts = await Cart.findAll({
      where: {
        user_id,
      },
    });

    res.status(201).json({
      success: true,
      data: carts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const DeleteCart = async (req, res) => {
  const { id } = req.params;

  try {
    const cart = await Cart.destroy({
      where: {
        id,
      },
    });

    res.status(201).json({
      success: true,
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  CreateCart,
  GetCarts,
  DeleteCart,
};
