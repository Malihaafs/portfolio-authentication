const express = require('express');
const router = express.Router();

const { loginForm, loginUser, userList } = require('../controllers/userController');
const { isAuthenticated, isGuest } = require('../middlewares/auth');

router.route('/login')
            .get(isGuest, loginForm)
            .post(isGuest, loginUser);

router.route('/')
            .get(isAuthenticated, userList);

module.exports = router;