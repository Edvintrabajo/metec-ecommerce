DROP DATABASE IF EXISTS metec;
CREATE DATABASE metec;

USE metec;

CREATE TABLE products (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  price DEC(7,2) DEFAULT NULL,
  brand VARCHAR(45) DEFAULT NULL,
  description VARCHAR(200) DEFAULT NULL,
  stock INT(11) DEFAULT NULL,
  image VARCHAR(100) DEFAULT NULL,
  url VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  fullname VARCHAR(45) DEFAULT NULL,
  email VARCHAR(45) DEFAULT NULL,
  password VARCHAR(64) DEFAULT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE orders (
  id INT(11) NOT NULL AUTO_INCREMENT,
  user_id INT(11) NOT NULL,
  product_id INT(11) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);


DESCRIBE products;

DESCRIBE users;

DESCRIBE orders;


INSERT INTO products (name, price, brand, description, stock, image, url) values 
  ('Xiaomi Redmi buds 3', 30, 'Xiaomi', 'The best earbuds in the market', 20, "name", "https://media.game.es/COVERV2/3D_L/V1F/V1FOJU.png"),
  ('HP Victus 16-e1022ns', 1149, 'HP', 'The best laptop in the world', 15, "name", "https://static.chollometro.com/threads/raw/YPPtF/872971_1/re/768x768/qt/60/872971_1.jpg");

-- INSERT INTO users (fullname, email, password) values
--   ('Edvin', 'Edvin@gmail.com', ''),
--   ('Miguelito', 'Miguelito@gmail.com', '');

-- INSERT INTO orders (user_id, product_id) values
--   (1, 1),
--   (2, 2);

SELECT * FROM products;

-- SELECT * FROM users;

-- SELECT * FROM orders;
