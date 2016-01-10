var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
    age: Number,
  created_at: Date,
  updated_at: Date
});

var userRole = mongoose.model('userRole',userSchema,'userRole');

module.exports = userRole;