DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (	
	item_id INTEGER(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(250),
    department_name VARCHAR(250),
    price INTEGER(10),
    stock_quantity INTEGER(10)
);

INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES ("bananas","fruits",1000, 35), 
("avocados","fruit",20, 17),
("chips","snacks",90, 40),
("pizza","frozen",5000, 15),
("chicken","poultry",1000, 35),
("strawberries","fruits",1000, 35),
("bananas","fruits",1000, 35);

SELECT * FROM products; 