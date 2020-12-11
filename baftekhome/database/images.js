var mongoose = require("mongoose");

var imagesSchema = mongoose.Schema({
  homeID: String,
  image1: String,
  image2: String,
  image3: String
});

var Images = mongoose.model("Images", imagesSchema);

module.exports = Images;
