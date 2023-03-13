import { pool } from "../db.js";

export const getOrders = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Orders");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM Orders WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM Orders WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO Orders (user_id, product_id) VALUES (?, ?)",
      [name, user_id, product_id]
    );
    res.status(201).json({ id: rows.insertId, user_id, product_id });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};