const User = require('../models/user');

// Login    => /login [Get]
exports.loginForm = async (req, res) => {
    res.render('login');    
};

// Login   => /login [Post]
exports.loginUser = async (req, res) => {
    // Insert Login Code Here
    const { username, password } = req.body;

    // Checks if email and password is entered by user
    if(!username || !password) {
        res.send('Please enter username & password');
    }

    // Finding user in database
    const user = await User.findOne({ username }).select("+password");

    if(!user) {
        res.send('Invalid Email or Password');
    } else {
        const isPasswordMatched = password === user?.password;

        if(!isPasswordMatched) {
            res.send('Invalid Email or Password');
        } else {
            // Set Session after validation Login
            req.session.loggedIn = true;
            req.session.username = username;

            res.redirect('/user/');
        }
    }    
};

// Login   => /list [Get]
exports.userList = async (req, res) => {
    const users = await User.find().sort({ username: 1 });

    res.render('users/index', { users });    
};