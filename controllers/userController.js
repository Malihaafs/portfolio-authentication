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

// Logout       => /logout [Get]
exports.logoutUser = async(req, res) => {
    const { loggedIn } = req?.session;

    if(loggedIn) {
        req.session.loggedIn = false;
        req.session.username = null;
    }
    
    res.redirect('/user/login/');
};

// User List    => /list [Get]
exports.userList = async (req, res) => {
    const users = await User.find().sort({ contact_name: 1 });

    res.render('users/index', { users });
};

// User Edit Form   => /edit/<id> [Get]
exports.userEdit = async(req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    res.render('users/edit', { user });
};

// User Update      => /update/<id> [Post]
exports.userUpdate = async(req, res) => {
    const { id } = req.params;
    const { username, email, contact_name, contact_number } = req.body;

    await User.findOneAndUpdate({ _id: id }, {
        username, email, contact_name, contact_number
    }, { upsert: true, useFindAndModify: false });

    res.redirect('/user');
};

// User Delete      => /delete/<id> [Get]
exports.userDelete = async(req, res) => {
    const { id } = req.params;

    await User.findByIdAndDelete({ _id: id });
    
    res.redirect('/user');    
};