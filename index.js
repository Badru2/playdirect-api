const express = require("express");
const sequelize = require("./config/database");
const dotenv = require("dotenv").config();

const ProductRouter = require("./routes/product-router");
const UserRouter = require("./routes/user-router");

const app = express();

app.use(express.json());

app.use("/api/products", ProductRouter);
app.use("/api", UserRouter);

sequelize.sync({ alter: true }).then(() => {
  app.listen(8080, () => {
    console.log("Server running on port 8080");
  });
});
