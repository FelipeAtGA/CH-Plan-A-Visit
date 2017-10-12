const db = require('../db/config');

const visitPlan = {};

visitPlan.findAll = () => {
  return db.query(
    `SELECT * FROM items`
  );
};

visitPlan.create = (item) => {
  return db.one(
    `
    INSERT INTO items ( title, img_url, exhibit_url )
    VALUES ( $1, $2, $3 )
    RETURNING *
    `, [item.title, item.img_url, item.exhibit_url]
  );
};

visitPlan.destroy = (id) => {
  return db.none(
    `
    DELETE FROM items
    WHERE id = $1
    `, [id]
  );
}

visitPlan.update = (item, id) => {
  return db.one(
    `
    UPDATE items SET
    title = $1,
    img_url = $2,
    exhibit_url = $3
    WHERE id = $4
    RETURNING *
    `, [item.title, item.img_url, item.exhibit_url, id]
  )
}

visitPlan.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FORM items
    WHERE id = $1
    `, [id]
  );
}

module.exports = visitPlan;
