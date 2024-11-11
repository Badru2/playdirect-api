const Product = require("../models/product");

const GetProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const CreateProduct = async (req, res) => {
  const { user_id, name, price, description, images, category } = req.body;

  try {
    const product = await Product.create({
      user_id,
      name,
      price,
      description,
      images,
      category,
    });

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const UpdateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, images, category } = req.body;

  try {
    const product = await Product.findByPk(id);

    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.images = images || product.images;
    product.category = category || product.category;

    await product.save();

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const DeleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.destroy({
      where: {
        id,
      },
    });

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  GetProducts,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
};
