const express = require('express');
const passport = require('passport');

const router = express.Router();

const dailyController = require('../controllers/dailyController/index.js');

// @route  GET api/daily/all
// @desc   User login - Return JWT token
// @access Private
// @errors nodailies error
router.get(
  '/all',
  passport.authenticate('jwt', { session: false }),
  dailyController.getAllDailies
);

// @route  POST api/daily/new
// @desc   Create new daily
// @access Private
// @errors error
router.post(
  '/new',
  passport.authenticate('jwt', { session: false }),
  dailyController.createDaily
);

// @route  GET api/daily/:daily_id
// @desc   Create new daily
// @access Private
// @errors nodaily
router.get(
  '/:daily_id',
  passport.authenticate('jwt', { session: false }),
  dailyController.getDailyById
);

module.exports = router;
