var express = require("express");
var app = express();
var bodyParser = require('body-parser'); 
var Student = require("./server/models/student");
var studentController= require('./server/controllers/student-controller');
var router = express.Router();
var mongoose =require('mongoose');
var port = 8080;

mongoose.connect('mongodb://localhost:27017/student');

app.use(bodyParser());

app.get('/', function(req, res){
	res.sendfile(__dirname + '/public/index.html');
});

app.listen(port);

console.log('Magic happens on port' + port);