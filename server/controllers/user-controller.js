var userRoleModel = require('../models/userRole');

module.exports.create = function(req,res){
	var user = req.body;
	var userModel = new userRoleModel(user);
	userModel.save(function(err){
		if(err){
			res.send(err);
		}
		else{
			var response =" User saved successfully!!";
			res.send(response);
		}
	});	
},

module.exports.findAll = function(req,res){
	userRoleModel.find({}, function(err,user){
		if(err){
			res.send(err)
		}
		console.log(user);
		res.send(user);
	});
}