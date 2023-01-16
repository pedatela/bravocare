const { Router } = require('express');

import { QuestionOneShiftsController } from './app/controllers/QuestionOneShiftsController';

const questionOneShiftsController = new QuestionOneShiftsController()

const routes = new Router();

routes.get('/total-jobs-number-per-nurses', questionOneShiftsController.totalJobsNumberPerNurses);
routes.get('/remaining-spots', questionOneShiftsController.remainingSpots);
routes.post('/compare-shifts', questionOneShiftsController.compareShifts);
routes.get('/question-one-shifts', questionOneShiftsController.index);
routes.get('/co-works', questionOneShiftsController.coWorkers);

module.exports = routes