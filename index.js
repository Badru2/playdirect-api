const express = require("express");
const sequelize = require("./config/database");

const ProductRouter = require("./routes/product-router");

const app = express();

app.use(express.json());

app.use("/api/products", ProductRouter);

sequelize.sync({ alter: true }).then(() => {
  app.listen(8080, () => {
    console.log("Server running on port 8080");
  });
});
