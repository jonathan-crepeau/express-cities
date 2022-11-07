const mongoose = require('mongoose');

// NOTE - Create the City Blueprint
const citySchema = new mongoose.Schema({
    name: String,
    description: String,
});

const City = mongoose.model('City', citySchema);
module.exports = City;