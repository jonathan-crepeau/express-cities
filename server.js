const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

// SECTION - Initialize Database
const db = require('./models');

// SECTION - TEMP DATA
const TEMP_CITIES = [
  {name: 'San Francisco', description: 'The Best!'},
  {name: 'San Diego', description: 'Beaches!'},
  {name: 'Seatle', description: 'Rain!'},
];


// SECTION - Middleware
// NOTE - Serve Public Assets
app.use(express.static(`${__dirname}/public`));

// NOTE - BodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// SECTION - Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/cities', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/citiesIndex.html'));
});


// SECTION - JSOn Data Endpoints Below

// NOTE - Get Cities Index
app.get('/api/v1/cities', (req, res) => {
    res.send('hello')
})


// SECTION - Server Start
app.listen(PORT, () => {
    console.log(`Application is listening on port ${PORT}.`);
});