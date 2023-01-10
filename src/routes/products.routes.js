import { Router } from "express";
import {
  createproduct,
  deleteproduct,
  getproduct,
  getproducts,
  updateproduct,
} from "../controllers/products.controller.js";

const router = Router();

// GET all Posts
router.get("/products", getproducts);

// GET An Post
router.get("/products/:id", getproduct);

// DELETE An Post
router.delete("/products/:id", deleteproduct);

// INSERT An Post
router.post("/products", createproduct);

// UPDATE An Post
router.patch("/products/:id", updateproduct);

export default router;
