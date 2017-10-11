// let the file know we are using express
const express = require('express');

// let the file know we are using a controller
const controller = require('../controllers/dbController');

// let the file know that we are using a views controller
//const views = require('../controllers/viewController');

// use an instance of router for the following calls
const visitPlanRouter = express.Router();

//visitPlanRouter.route('/:id').get(controller.getOne);
visitPlanRouter.route('/')
  .get(controller.index)
  .post(controller.create);

module.exports = visitPlanRouter;
