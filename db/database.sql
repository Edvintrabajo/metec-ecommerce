DROP DATABASE IF EXISTS metec;
CREATE DATABASE metec;

USE metec;

CREATE TABLE products (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  price DEC(7,2) DEFAULT NULL,
  brand VARCHAR(45) DEFAULT NULL,
  description VARCHAR(200) DEFAULT NULL,
  PRIMARY KEY(id)
);

DESCRIBE products;

INSERT INTO products (name, price, brand, description) values 
  ('Xiaomi Redmi buds 3', 30, 'Xiaomi', 'The best earbuds in the market'),
  ('HP Victus 16-e1022ns', 1149, 'HP', 'The best laptop in the world');

SELECT * FROM products;
