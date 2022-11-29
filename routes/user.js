const express = require('express');
const router = express.Router();

const { loginForm, loginUser } = require('../controllers/userController');

router.route('/login')
            .get(loginForm)
            .post(loginUser);

module.exports = router;