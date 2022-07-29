import express from "express";
const router = express.Router();

import { createBoots } from "../controllers/product.js";

router.post("/newBoots", createBoots);

export default router;
