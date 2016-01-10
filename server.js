var express = require("express");
var app = express();
var bodyParser = require('body-parser'); 
var Student = require("./server/models/student");
var studentController= require('./server/controllers/student-controller');
var routes;
var mongoose =require('mongoose');
var port = 8080;

mongoose.connect('mongodb://localhost:27017');

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(__dirname + '/public')); 

routes = require('./server/routes/routes')(app);

app.listen(port);

console.log('Magic happens on port' + port);

exports = module.exports = app;