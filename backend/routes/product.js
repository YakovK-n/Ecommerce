import express from "express";
import Product from "../models/product.js";

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRouter.post("/", async (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
  });
  const product = await newProduct.save();
  res.send({ message: "Product Created", product });
});

export default productRouter;
