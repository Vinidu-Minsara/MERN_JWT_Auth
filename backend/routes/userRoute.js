const express = require('express');
const userController = require('../controllers/userController');
const { authenticateToken } = require('../utils/authMiddleware');
const router = express.Router();

router.route('/signup')
    .post(userController.signup);

router.route('/login')
    .post(userController.login);

router.route('/')
    .get(authenticateToken, userController.getUsers);

module.exports = router;