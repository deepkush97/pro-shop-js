import dotenv from "dotenv";
dotenv.config();
import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import Product from "./models/productModel.js";
connectDB();
const app = express();
app.get("/", (req, res) => {
  res.send("API is working");
});
app.get("/api/products", async (req, res) => {
  res.json(await Product.find());
});
app.get("/api/products/:id", async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
