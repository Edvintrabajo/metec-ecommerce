import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrders,
} from "../controllers/orders.controller.js";

const router = Router();

// GET all Orders
router.get("/orders", getOrders);

// GET An Order
router.get("/orders/:id", getOrder);

// DELETE An Order
router.delete("/orders/:id", deleteOrder);

// INSERT An Order
router.post("/orders", createOrder);

export default router;
