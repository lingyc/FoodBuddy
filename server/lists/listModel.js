var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
	name: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  timestamps: true
});

module.exports = mongoose.model('List', listSchema);