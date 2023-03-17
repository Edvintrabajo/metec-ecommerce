import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import productsRoutes from "./routes/products.routes.js";
import usersRoutes from "./routes/users.routes.js";
import ordersRoutes from "./routes/orders.routes.js";
import imagesRoutes from "./routes/images.routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true,
  }
));

// Routes
app.use("/", indexRoutes);
app.use("/api", productsRoutes);
app.use("/api", usersRoutes);
app.use("/api", ordersRoutes);
app.use("/api", imagesRoutes);


app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;