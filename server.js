var express = require("express");
var app = express();
var compression = require('compression');
var bodyParser = require('body-parser'); 
var routes;
var mongoose =require('mongoose');
var port = process.env.PORT || 8001;


mongoose.connect('mongodb://localhost:27017');


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

routes = require('./server/routes/routes')(app);
app.listen(port);

console.log('Magic happens on port' + port);

exports = module.exports = app;