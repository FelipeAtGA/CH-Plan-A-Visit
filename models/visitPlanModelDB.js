const db = require('../db/config');

const visitPlan = {};

visitPlan.findAll = () => {
  return db.query(
    `SELECT * FROM items`
  );
};

visitPlan.create = (item) => {
  console.log('create ', item);
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

visitPlan.update = (obj, id) => {
  console.log('model ', obj);
  return db.one(
    `
    UPDATE items SET
    comment = $1
    WHERE id = $2
    RETURNING *
    `, [obj.comment, id]
  );
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
