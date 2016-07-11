var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

itemSchema = new mongoose.Schema({
	name: { type: String, unique: true },
	'Safeway': { type: Number, default: null },
	'Trader Joes': { type: Number, default: null },
	'Whole Foods': { type: Number, default: null },
});

module.exports = mongoose.model('Item', itemSchema);