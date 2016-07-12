var Item = require('./itemModel');
var Q = require('q');

var findAllItem = Q.nbind(Item.find, Item);
var findItem = Q.nbind(Item.findOne, Item);
var createItem = Q.nbind(Item.create, Item);

module.exports = {
	updatePrice: function(req, res) {

		findItem({ name: req.body.name })
		.then(function(item) {
			if (item) {
				Item.update({name: req.body.name}, req.body, function(err){
					if (err) { console.log(err); }
					res.end();
				});
			} else {
				return createItem(req.body);
			}
		})
		.then(function(item) {
			console.log('after update:', item);
			res.json(item);
		})
		.fail(function(err) {
			console.log(err);
			res.status(500).send({error: err.message});
		})
	},

	getAllItems: function(req, res) {
		findAllItem({})
		.then(function(items) {
			console.log('retriving items', items);
			res.json(items);
		})
		.fail(function(err) {
			console.log(err);
			res.status(500).send({error: err.message});
		})
	}


};