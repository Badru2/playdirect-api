const express = require("express");
const router = express.Router();

const { GetProducts, CreateProduct, UpdateProduct, DeleteProduct } = require("../controllers/product-controller");

router.get("/", GetProducts);
router.post("/store", CreateProduct);
router.put("/update/:id", UpdateProduct);
router.delete("/destroy/:id", DeleteProduct);

module.exports = router;
