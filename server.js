const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// SECTION - Intialize Database
const db = require('./models');


// SECTION - Middleware

// Serve Public Assets
app.use(express.static(`${__dirname}/public`));

// BodyParser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// SECTION - Routes

// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/homepage.html'));
});

// List of All Cities
app.get('/cities', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/allCities.html'));
});

// Add New City
app.get('/cities/new', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/newCity.html'));
});


// SECTION - Start Server
app.listen(PORT, () => {
    console.log(`Application is listening on port ${PORT}.`);
});