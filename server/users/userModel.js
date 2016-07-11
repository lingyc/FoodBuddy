var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {type: String, require: true, unique: true},
	password: {type: String, require: true}
});

module.exports = mongoose.model('User', userSchema);