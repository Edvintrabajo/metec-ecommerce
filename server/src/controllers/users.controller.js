import { pool } from "../db.js";
import { generarHashContraseña, validarContraseña } from "./crypto.js";

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Users");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM Users WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM Users WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const hash = generarHashContraseña(password);
    const [rows] = await pool.query(
      "INSERT INTO Users (fullname, email, password) VALUES (?, ?, ?)",
      [fullname, email, hash]
    );
    res.status(201).json({ id: rows.insertId, fullname, email, hash });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, password } = req.body;
    const hash = generarHashContraseña(password);

    const [result] = await pool.query(
      "UPDATE Users SET fullname = IFNULL(?, fullname), email = IFNULL(?, email), password = IFNULL(?, password) WHERE id = ?",
      [fullname, email, hash, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Users not found" });

    const [rows] = await pool.query("SELECT * FROM Users WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await pool.query("SELECT * FROM Users WHERE email = ?", [email]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = rows[0];

    if (!validarContraseña(password, user.password)) {
      return res.status(401).json({ state : false, message: "Invalid password" });
    } 

    return res.status(200).json({ state : true, message: "Login success" });

  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
}