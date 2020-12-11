var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  identity_card: {
    unique: true,
    type: String,
    required: true
  },
  firstName: String,
  lastName: String,
  email:{
    unique: true,
    type: String,
    required: true
  },
  password: String
});



var Users = mongoose.model("Users", userSchema);

module.exports = Users;
