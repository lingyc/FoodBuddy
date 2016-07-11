var Item = require('./itemModel');
var Q = require('q');

var findItem = Q.nbind(Item.findOne, Item);
var createItem = Q.nbind(Item.create, Item);
var updateItem = Q.nbind(Item.update, Item);

module.exports = {
	updatePrice: function(req, res) {
		console.log('updating price', req.body);
		findItem({ name: req.body.name })
		.then(function(item) {
			if (item) {
				return updateItem(req.body);
			} else {
				return createItem(req.body);
			}
		})
		.then(function(item) {
			res.send(item);
		})
		.fail(function(err) {
			res.status(500).send({error: err.message});
		})
	}
};