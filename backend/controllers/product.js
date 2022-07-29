import product from "./models/product.js";
import mongoose from "mongoose";

const bootsModal = product;

export const createBoots = async (req, res) => {
  const boots = req.body;
  const name = req.body.name;
  const image = req.body.image;
  const price = req.body.price;
  const newBoots = new bootsModal({
    name,
    image,
    price,
  });

  try {
    await newBoots.save();
    res.status(201).json(newBoots);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
