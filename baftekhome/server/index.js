const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000

mongoose.connect("mongodb+srv://hbib:hbib@cluster0.m3m3t.mongodb.net/BaftekHome?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('./react-client/dist'));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})