const mongoose = require('mongoose');
const URI = 'mongodb+srv://jonathan-crepeau:this-is-my-password@v2citiescluster.37nm9tk.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(() => console.log('Connected to MongoDB Database - Initial Connection'))
    .catch((err) => console.log(err));

module.exports = {
    City: require('./City.js'),
};