var mongoose = require("mongoose");

var homeSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  image: String,
  location: String,
  description: String,
  price: Number,
  contactInformation: String,
  category: String
});

var Home = mongoose.model("Home", homeSchema);

module.exports = Home;
