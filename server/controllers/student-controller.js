var studentModel = require('../models/student');

module.exports.create = function(req,res){

	var student = new studentModel(req.body);
	student.save(function(err, result){
		res.json(result);
	});
}