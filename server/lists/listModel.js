var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var listSchema = new Schema({
	name: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
});

listSchema.plugin(timestamps);
module.exports = mongoose.model('List', listSchema);