import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/", (req, res) => res.json({ message: "welcome to my api" }));

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;