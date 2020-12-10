var mongoose = require("mongoose");

var homeSchema = mongoose.Schema({
  id: {
    unique: true,
    type: String
  },
  image: String,
  location: String,
  description: String,
  price: Number,
  contactInformation: String,
  category: String
});

var Home = mongoose.model("Home", homeSchema);

module.exports = Home;
