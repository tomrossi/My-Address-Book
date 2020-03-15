const express = require('express');
const app = express();
const port = 4000;

app.get('/', function (req, res) {
  res.send('ciao!');
});

app.listen(port, function () {
  console.log('Example app listening on port 5000!');
});


// getting-started.js
var mongoose = require('mongoose');
//mongodb://127.0.0.1/testdb
mongoose.connect('mongodb://127.0.0.1/testdb',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connecteeeeeeeeeeeeeeeeeeeedd")
});

var bookmarkSchema = new mongoose.Schema({
  title: String , link:String
});

var bookmar = mongoose.model('Bookmark',bookmarkSchema); 





