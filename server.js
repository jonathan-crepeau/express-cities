const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// SECTION - Middleware
app.use(express.static(`${__dirname}/public`));


// SECTION - Routes

// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/homepage.html'));
});


// SECTION - Start Server
app.listen(PORT, () => {
    console.log(`Application is listening on port ${PORT}.`);
});