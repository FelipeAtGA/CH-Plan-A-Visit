const db = require('../db/config');

const visitPlan = {};

visitPlan.create = (item) => {
  return db.one(
    `
    INSERT INTO items ( title, img_url, exhibit_url )
    VALUES ( $1, $2, $3 )
    RETURNING *
    `, [item.title, item.img_url, item.exhibit_url]
  );
};

module.exports = visitPlan;
