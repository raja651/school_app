var studentModel = require('../models/student');

module.exports.findAll = function(req,res){

	studentModel.find({},function(err,student){
			if(err)
				res.send(err);
			
			console.log(student);
			res.send(student)
		});
};