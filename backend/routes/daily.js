const express = require('express');
const passport = require('passport');

const router = express.Router();

const dailyController = require('../controllers/dailyController/index.js');

// @route  GET api/daily/all
// @desc   Get all dailies
// @access Private
// @errors nodailies error
router.get(
  '/all',
  passport.authenticate('jwt', { session: false }),
  dailyController.getAllDailies
);

// @route  GET api/daily/all/tag/:tag
// @desc   Get all dailies by tag
// @access Private
// @errors nodailies error
router.get(
  '/all/tag/:tag',
  passport.authenticate('jwt', { session: false }),
  dailyController.getAllDailiesByTag
);

// @route  GET api/daily/public
// @desc   Get public dailies
// @access Public
// @errors nodailies error
router.get('/public', dailyController.getPublicDailies);

// @route  GET api/daily/public/tag/:tag
// @desc   Get public dailies by tag
// @access Public
// @errors nodailies error
router.get('/public/tag/:tag', dailyController.getAllDailiesByTag);

// @route  POST api/daily/new
// @desc   Create new daily
// @access Private
// @errors error
router.post(
  '/new',
  passport.authenticate('jwt', { session: false }),
  dailyController.createDaily
);

// @route  DELETE api/daily/delete/:daily_id
// @desc   Delete daily
// @access Private
// @errors nodaily error
router.delete(
  '/delete/:daily_id',
  passport.authenticate('jwt', { session: false }),
  dailyController.deleteDaily
);

// @route  GET api/daily/:daily_id
// @desc   Get daily by id
// @access Public
// @errors nodaily
router.get('/:daily_id', dailyController.getDailyById);

module.exports = router;
