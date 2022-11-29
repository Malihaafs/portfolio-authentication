const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Include body parser on express app
app.use(bodyParser.urlencoded({ extended: false }));

// View engine setup
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Import all routes
const user = require('./routes/user');

// Setup public folder for assets
app.use(express.static('./public'));

// Use USER Routes to the express app with the url prefix 'user'
app.use('/user', user);

module.exports = app;