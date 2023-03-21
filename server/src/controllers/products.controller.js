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
    const path = req.file.path.split("\\")
    const image = path[path.length - 1]
    const url = req.protocol + "://" + req.get("host");

    const [rows] = await pool.query(
      "INSERT INTO products (name, price, brand, description, stock, image) VALUES (?, ?, ?, ?, ?, ?)",
      [name, price, brand, description, stock, image]
    );

    const id = rows.insertId;
    const newURL = url + "/api/products/images/" + id

    updateProductURL(id, newURL)

    res.status(201).json({ id: id, name, price, brand, description, stock, image, url });
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

export const getImage = async (req, res) => {
  try {
    const { id } = req.params;
    const route = "/src/uploads/";
    let imageURL = route;

    const [rows] = await pool.query("SELECT image FROM products WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Image not found" });
    }

    imageURL += rows[0].image;

    res.sendFile(imageURL, { root: "." });

  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

const updateProductURL = async (id, url) => {
  const [rows] = await pool.query("UPDATE products SET url = ? WHERE id = ?", [
    url, id
  ]);
}