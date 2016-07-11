var Item = require('./itemModel');
var Q = require('q');

var findItem = Q.nbind(Item.findOne, Item);
var createItem = Q.nbind(Item.create, Item);
var updateItem = Q.nbind(Item.update, Item);

module.exports = {
	updatePrice: function(req, res) {

		findItem({ name: req.body.name })
		.then(function(item) {
			if (item) {
				updateItem({name: req.body.name}, req.body, {upsert: true}, function(err){
					if (err) { console.log(err); }
					res.end();
				});
			} else {
				return createItem(req.body);
			}
		})
		.then(function(item) {
			console.log('after update:', item);
			res.send(item);
		})
		.fail(function(err) {
			console.log(err);
			res.status(500).send({error: err.message});
		})
	}
};