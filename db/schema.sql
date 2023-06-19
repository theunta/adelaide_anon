CREATE DATABASE ade_board;
\c ade_board

CREATE TABLE pins(
  id SERIAL PRIMARY KEY,
  name TEXT,
  review TEXT,
  address TEXT,
  img TEXT
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);

INSERT INTO pins(name, review, address, img)
VALUES
    ('Bread & Bone', 'A must do if after some delicious burgers in Adelaide. Hot dogs also amazing. Hit the spot.', '15 Peel St', 'https://i.imgur.com/H8MleEf.jpeg')
    ('Midnight Spaghetti', 'Excellent Foods, Excellent service, enough said, highly recommended!', '196 Grenfell St', 'https://i.imgur.com/VADN4FO.jpeg')
    ('Ông', 'Interesting cocktails and tasty food at a very reasonable price. The prawn starters are a must.', '287 Rundle St', 'https://i.imgur.com/CJ4tBs7.jpeg')
