import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.controller.js";

const router = Router();

// GET all Products
router.get("/products", getProducts);

// GET An Product
router.get("/products/:id", getProduct);

// DELETE An Product
router.delete("/products/:id", deleteProduct);

// INSERT An Product
router.post("/products", createProduct);

// UPDATE An Product
router.patch("/products/:id", updateProduct);

export default router;
