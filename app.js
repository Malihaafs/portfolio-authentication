const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/login', function(req, res) {
    res.render('login');
});

module.exports = app;