const visitPlan = require('../models/visitPlanModelDB');

const visitPlanController = {};

visitPlanController.index = (req, res) => {
  visitPlan.findAll()
  .then((items) => {
    res.json({
      message: 'ok',
      data: { items },
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json({ message: '400', err })
  });
};

visitPlanController.create = (req, res) => {
  visitPlan.create({
    title: req.body.title,
    img_url: req.body.img_url,
    exhibit_url: req.body.exhibit_url
  })
  .then((data) => {
    res.json({ message: 'ok', data: {data} });
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json({ message: '400', err });
  });
};

module.exports = visitPlanController;
