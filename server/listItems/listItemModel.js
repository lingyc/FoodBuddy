var mongoose = require('mongoose');
var Schema = mongoose.Schema;

listItemSchema = new mongoose.Schema({
	name: String,
  listId: {
    type: Schema.Types.ObjectId,
    ref: 'List'
  },
  itemId: {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }
});

module.exports = mongoose.model('ListItem', listItemSchema);
