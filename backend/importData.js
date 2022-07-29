// require("dotenv").config();
import dotenv from "dotenv";
import mongoose from "mongoose";
import data from "./data/products.js";
import product from "./models/product.js";

const productData = data;
const Product = product;

dotenv.config();
mongoose.connect(process.env.MONGODB_URL);

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
