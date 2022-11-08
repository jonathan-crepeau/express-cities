const mongoose = require('mongoose');
const { Schema } = mongoose;

// SECTION - Define the Schema

const citySchema = new Schema({
    name: String,
    description: String,
})

// SECTION - Create A Model

const City = mongoose.model('City', citySchema);

// SECTION - Export This Fool
module.exports = City;