import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  getImage,
  getBrands,
  getTypes
} from "../controllers/products.controller.js";
import multer  from 'multer';
import storage from "../storage.js";

const router = Router();

const upload = multer({ storage })

// GET all Products
router.get("/products", getProducts);

// GET a Product
router.get("/products/:id", getProduct);

// DELETE a Product
router.delete("/products/:id", deleteProduct);

// INSERT a Product
router.post("/products", upload.single('image'), createProduct);

// UPDATE a Product
router.patch("/products/:id", updateProduct);

// GET a Product Image
router.get("/products/images/:id", getImage);

// GET a Product Brand by Category
router.post("/products/brands", getBrands)

// Get a Product Type by Category
router.post("/products/types", getTypes)

export default router;