var mongoose = require("mongoose");


module.exports = mongoose.model('student', {
name: String,
Id:String,
schoolName:String
},'student');
