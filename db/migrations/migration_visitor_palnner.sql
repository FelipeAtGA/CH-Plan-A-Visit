\c visitor_palnner

DROP TABLE IF EXISTS items;

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  img_url TEXT,
  exhibit_url TEXT,
  comment TEXT
);
