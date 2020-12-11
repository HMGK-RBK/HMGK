const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const port = 3000;

const Home = require("../database/homes.js");
const Users = require("../database/users.js");

mongoose.connect(
  "mongodb+srv://hbib:hbib@cluster0.m3m3t.mongodb.net/BaftekHome?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./react-client/dist"));

app.post("/api/newuser", (req, res) => {
  const saltRounds = 10;
  var obj = req.body;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      throw err;
    }
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      obj.password = hash;
      Users.create(obj);
    });
  });
});

app.post("/api/users", (req, res) => {
  Users.find({ email: req.body.email }, function (err, docs) {
    if (err) {
      console.log(err);
    }
    bcrypt.compare(req.body.password, docs[0].password, function (err, result) {
      if (err) {
        console.log(err);
      }
      if (result) {
        res.send(docs);
      }
    });
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
