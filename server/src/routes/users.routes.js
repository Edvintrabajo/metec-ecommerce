import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  login
} from "../controllers/users.controller.js";

const router = Router();

// GET all Users
router.get("/Users", getUsers);

// GET An User
router.get("/Users/:id", getUser);

// DELETE An User
router.delete("/Users/:id", deleteUser);

// INSERT An User
router.post("/Users", createUser);

// UPDATE An User
router.patch("/Users/:id", updateUser);

// LOGIN An User
router.post("/login", login);

export default router;
