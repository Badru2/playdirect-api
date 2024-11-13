const express = require("express");
const { GetCarts, CreateCart, DeleteCart, UpdateCart } = require("../controllers/cart-controller");

const router = express.Router();

router.get("/", GetCarts);
router.post("/store", CreateCart);
router.put("/update/:id", UpdateCart);
router.delete("/destroy/:id", DeleteCart);

module.exports = router;
