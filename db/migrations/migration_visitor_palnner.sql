\c visitor_palnner

DROP TABLE IF EXISTS items;

CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  img_url TEXT,
  exhibit_url TEXT,
  comment VARCHAR(255)
);
