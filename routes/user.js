const express = require('express');
const router = express.Router();

const { loginForm, loginUser, userList, userEdit, userUpdate, userDelete } = require('../controllers/userController');
const { isAuthenticated, isGuest } = require('../middlewares/auth');

router.route('/login')
            .get(isGuest, loginForm)
            .post(isGuest, loginUser);

router.route('/').get(isAuthenticated, userList);
router.route('/edit/:id').get(isAuthenticated, userEdit);
router.route('/update/:id').post(isAuthenticated, userUpdate);
router.route('/delete/:id').get(isAuthenticated, userDelete);

module.exports = router;