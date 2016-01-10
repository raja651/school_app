var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
	adminId : {type :String , required : true, unique : true},
	password : {type : String, required : true},
	adminName : {type :String, required : true},
	securityQuestions : {type : String, required : true}
});

var admin = mongoose.model('admin',adminSchema,'admin');

module.exports = admin;