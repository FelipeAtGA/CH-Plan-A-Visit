// let the file know we are using express
const express = require('express');

// let the file know we are using a controller
const controller = require('../controllers/dbController');

const museumController = require('../controllers/museumController');

// let the file know that we are using a views controller
//const views = require('../controllers/viewController');

// use an instance of router for the following calls
const visitPlanRouter = express.Router();

visitPlanRouter.route('/db/:id')
  .get(controller.show)
  .put(controller.update)
  .delete(controller.delete);

visitPlanRouter.route('/db/')
  .get(controller.index)
  .post(controller.create);

visitPlanRouter.route('/museum')
  .get(museumController.index);

module.exports = visitPlanRouter;
