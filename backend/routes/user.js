const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController/index.js');

// @route  POST api/user/login
// @desc   User Login - Return jwt token
// @access Public
// @errors incorrectinfo
router.post('/login', userController.loginUser);

module.exports = router;
