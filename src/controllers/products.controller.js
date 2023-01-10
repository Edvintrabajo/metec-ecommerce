import { pool } from "../db.js";

export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Products");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM Products WHERE id = ?", [
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
    const [rows] = await pool.query("DELETE FROM Products WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createproduct = async (req, res) => {
  try {
    const { name, price, brand, description } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO Products (name, price, brand, description) VALUES (?, ?, ?, ?)",
      [name, price, brand, description]
    );
    res.status(201).json({ id: rows.insertId, name, price, brand, description });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, brand, description } = req.body;

    const [result] = await pool.query(
      "UPDATE Products SET name = IFNULL(?, name), price = IFNULL(?, price), brand = IFNULL(?, brand), description = IFNULL(?, description) WHERE id = ?",
      [name, price, brand, description, id]
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
