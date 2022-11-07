const express = require('express');
const app = express();
const port = process.env.port || 3001;
const path = require('path');

// SECTION - Middleware
app.use(express.static(`${__dirname}/public`));

// SECTION - Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// SECTION - Server Start
app.listen(port, () => {
    console.log(`Application is listening on port ${port}.`);
});