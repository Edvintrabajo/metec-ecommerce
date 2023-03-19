import { pool } from "../db.js";

export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM products WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, brand, description, stock } = req.body;
    const imagePath = req.file.path.split("\\").join("/")
    
    const [rows] = await pool.query(
      "INSERT INTO products (name, price, brand, description, stock, image) VALUES (?, ?, ?, ?, ?, ?)",
      [name, price, brand, description, stock, imagePath]
    );
    res.status(201).json({ id: rows.insertId, name, price, brand, description, stock, imagePath });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

// PENDIENTE DE ARREGLO
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, brand, description, stock } = req.body;

    const [result] = await pool.query(
      "UPDATE products SET name = IFNULL(?, name), price = IFNULL(?, price), brand = IFNULL(?, brand), description = IFNULL(?, description), stock = IFNULL(?, stock) WHERE id = ?",
      [name, price, brand, description, stock, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Products not found" });

    const [rows] = await pool.query("SELECT * FROM Products WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
