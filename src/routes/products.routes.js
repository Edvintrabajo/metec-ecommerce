import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/products.controller.js";

const router = Router();

// GET all Posts
router.get("/products", getProducts);

// GET An Post
router.get("/products/:id", getProduct);

// DELETE An Post
router.delete("/products/:id", deleteProduct);

// INSERT An Post
router.post("/products", createProduct);

// UPDATE An Post
router.patch("/products/:id", updateProduct);

export default router;
