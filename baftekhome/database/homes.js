var mongoose = require('mongoose');

var homeSchema = mongoose.Schema({
    location: String,
    images: String,
    description: String,
    price: Number,
    contactInformation: String,
    category: String
});

var Home = mongoose.model('Home', homeSchema);

module.exports = Home;