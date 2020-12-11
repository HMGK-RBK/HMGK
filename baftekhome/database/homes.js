var mongoose = require("mongoose");

var homeSchema = mongoose.Schema({
  image: String,
  location: String,
  description: String,
  price: Number,
  contactInformation: String,
  category: String,
  userName:{
    type:String,
    unique:true
  }
  });

var Home = mongoose.model("Home", homeSchema);

module.exports = Home;
