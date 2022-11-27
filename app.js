const express = require('express');
const app = express();

const PORT = 8000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/login', function(req, res) {
    res.render('login');
});

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});

module.exports = app;