var express = require("express");
var app = express();
var compression = require('compression');
var bodyParser = require('body-parser'); 
var Student = require("./server/models/student");
var studentController= require('./server/controllers/student-controller');
var router = express.Router();
var mongoose =require('mongoose');
var port = 8001;

mongoose.connect('mongodb://localhost:27017/test/userRoles');

app.use(compression());
// app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/public', express.static(__dirname + '/public'));
// app.use('/public/js', express.static(__dirname + '/public/js'));
// app.use('/public/css', express.static(__dirname + '/public/css'));


//app.get code goes into route folder
app.get('/', function(req, res){
	console.log(__dirname);
	res.sendfile(__dirname + '/public/index.html');
});

//this find function from mongodb goes into controller folder
app.get('/students', function(req,res){
	Student.find({},function(err,student){
			if(err)
				res.send(err);
			
			console.log(student);
			res.send(student)
		});
})

app.listen(port);

console.log('Magic happens on port' + port);

//console.log(studentController.create());

exports = module.exports = app;