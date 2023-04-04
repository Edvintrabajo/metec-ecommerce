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
  category VARCHAR(45) DEFAULT NULL,
  image VARCHAR(100) DEFAULT NULL,
  url VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  fullname VARCHAR(45) DEFAULT NULL,
  email VARCHAR(45) DEFAULT NULL,
  password VARCHAR(100) DEFAULT NULL,
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


INSERT INTO products (name, price, brand, description, stock, category, image, url) values 
  ('Xiaomi Redmi buds 3', 30, 'Xiaomi', 'The best earbuds in the market', 20, "Headphones", "name", "https://media.game.es/COVERV2/3D_L/V1F/V1FOJU.png"),
  ('HP Victus 16-e1022ns', 1149, 'HP', 'The best laptop in the world', 15, "Laptop", "name", "https://static.chollometro.com/threads/raw/YPPtF/872971_1/re/768x768/qt/60/872971_1.jpg"),
  ('Gigabyte B550 Gaming Motherboard', 259, 'Gigabyte', 'The best motherboard in the world', 10, "Components", "name", "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/GIGABYTE/B550-GAMING-X-V2/1-plyta-glowna-box.jpg"),
  ('AMD Ryzen 5 3600', 199, 'AMD', 'The best CPU in the world', 10, "Components", "name", "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/4/pr_2022_4_4_12_7_15_889_00.jpg"),
  ('AMD Radeon RX 5700 XT', 399, 'AMD', 'The best GPU in the world', 10, "Components", "name", "https://a.allegroimg.com/original/1112dd/1d4c78014b7aa033efe4a1bb2f7d/Gigabyte-Radeon-RX-5700-XT-Gaming-OC8-GB"),
  ('Corsair Vengeance LPX 16GB', 79, 'Corsair', 'The best RAM in the world', 10, "Components", "name", "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2017/7/pr_2017_7_21_9_2_18_513.jpg"),
  ('Samsung 970 EVO Plus 1TB', 149, 'Samsung', 'The best SSD in the world', 10, "Components", "name", "https://allegro.stati.pl/AllegroIMG/PRODUCENCI/SAMSUNG/970-EVO-Plus/MZ-V7S1T0BW/1-dysk-ssd-m.2.jpg"),
  ('Corsair RM750x', 99, 'Corsair', 'The best PSU in the world', 10, "Components", "name", "https://www.corsair.com/corsairmedia/sys_master/productcontent/CP-9020179-NA-RM750x_PSU_01.png"),
  ('Cooler Master MasterBox MB311L', 49, 'Cooler Master', 'The best case in the world', 10, "Components", "name", "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/3/pr_2023_3_27_14_45_0_941_00.jpg"),
  ('Corsair K55 RGB', 39, 'Corsair', 'The best keyboard in the world', 10, "Components", "name", "https://cwsmgmt.corsair.com/pdp/k55-rgb-pro/pro/k55_rgb_pro_top.png"),
  ('Corsair Harpoon RGB', 29, 'Corsair', 'The best mouse in the world', 10, "Components", "name", "https://f00.esfr.pl/foto/8/45511807673/54010327151b102cfaa1b3a94f6e0903/corsair-mysz-corsair-harpoon-rgb-pro,45511807673_3.jpg"),
  ('Corsair Void Pro RGB', 79, 'Corsair', 'The best headset in the world', 10, "Components", "name", "htthttps://media.ldlc.com/r1600/ld/products/00/05/51/16/LD0005511647_2.jpg");

-- INSERT INTO users (fullname, email, password) values
--   ('Edvin', 'Edvin@gmail.com', ''),
--   ('Miguelito', 'Miguelito@gmail.com', '');

-- INSERT INTO orders (user_id, product_id) values
--   (1, 1),
--   (2, 2);

SELECT * FROM products;

-- SELECT * FROM users;

-- SELECT * FROM orders;
