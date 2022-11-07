const express = require('express');
const app = express();
const port = process.env.port || 3001;
const path = require('path');

// SECTION - Middleware

// SECTION - Routes
app.get('/', (req, res) => {
    res.send('The root, bb!');
});

// SECTION - Server Start
app.listen(port, () => {
    console.log(`Application is listening on port ${port}.`);
});