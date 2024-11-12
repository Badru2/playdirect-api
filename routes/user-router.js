const express = require("express");
const router = express.Router();

const { Register, Login, DeleteUser, UpdateUser } = require("../controllers/user-controller");

router.post("/register", Register);
router.post("/login", Login);
router.delete("/delete/:id", DeleteUser);
router.put("/update/:id", UpdateUser);

module.exports = router;
