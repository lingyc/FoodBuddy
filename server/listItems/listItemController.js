var ListItem = require('./listItemModel');
var List = require('../lists/listModel');
var Item = require('../items/itemModel');
var User = require('../users/userModel');
var Q = require('q');

var findList = Q.nbind(List.findOne, List);
var findItem = Q.nbind(Item.findOne, Item);
var findUser = Q.nbind(User.findOne, User);


var findAllListItem = Q.nbind(ListItem.find, ListItem);
var findListItem = Q.nbind(ListItem.findOne, ListItem);
var createListItem = Q.nbind(ListItem.create, ListItem);
var removeListItem = Q.nbind(ListItem.remove, ListItem);

module.exports = {
	addItemToList: function(res, req) {
		var currentList;
		var currentItem;

		findList({name: res.body.listName})
		.then(function(list){
			console.log('found list', list);
			currentList = list._id;
			return findItem({name: res.body.itemName})
		})
		.then(function(item){
			if (item) {
				currentItem = item._id;
				return findListItem({
					name: res.body.itemName,
					listId: currentList,
					itemId: currentItem,
				})
			} else {
				console.log('item not exsits');
				req.status(500).send({error: "item not exist"});
			}
		})
		.then(function(found){
			if (found) {
				console.log('item exsits');
				req.status(500).send({error: "item already exist"});
			} else {
				return createListItem({
					name: res.body.itemName,
					listId: currentList,
					itemId: currentItem
				})
			}
		})
		.then(function(item){
			console.log('item added', item);
			req.status(201).send('added item');
		})
    .fail(function (error) {
    	console.log('fail to add item', error);
			req.status(500).send({error: "cannot add item"});
    });
	},

	retriveListItems: function(req, res) {
		console.log(req.query);
		var currentListId;
		findUser({ username: req.query.username })
		.then(function(user) {
			console.log('found user:', user);
			return findList({ userId: user._id, name: req.query.listName })
		})
		.then(function(list){
			ListItem.find({listId: list._id})
			.populate('itemId')
			.exec(function(err, items) {
				if (err) {
					console.log('not finding items', err);
					res.status(500).send({error: "cannot retrive listItems"});
				} else {
					console.log('found these items', items);
					res.json(items);
				}
			});
		})
	},

	removeListItem: function(req, res) {
		console.log(req.body);
		findUser({ username: req.body.username })
		.then(function(user) {
			console.log('remove found:', user);
			return findList({ userId: user._id, name: req.body.listName })
		})
		.then(function(list){
			console.log('deleting list', list);
			return removeListItem({ name: req.body.itemName, listId: list._id });
		})
		.then(function(list) {
			res.status(202).send('deleted item from list');
		})
    .fail(function (error) {
    	console.log('fail to delete item from list');
			res.status(500).send({error: "cannot delete item from list"});
    });
	}
}
