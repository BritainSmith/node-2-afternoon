CREATE TABLE product(
product_id SERIAL PRIMARY KEY NOT NULL,
product_name VARCHAR(40) NOT NULL,
product_description TEXT NOT NULL,
price FLOAT NOT NULL,
image_url TEXT NOT NULL);