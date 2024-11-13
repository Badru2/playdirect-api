const express = require("express");
const { GetCarts, CreateCart, DeleteCart } = require("../controllers/cart-controller");

const router = express.Router();

router.get("/", GetCarts);
router.post("/store", CreateCart);
router.delete("/destroy/:id", DeleteCart);

module.exports = router;
