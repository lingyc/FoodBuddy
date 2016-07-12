var ListItem = require('./listItemModel');
var List = require('../lists/listModel');
var Item = require('../items/itemModel');
var Q = require('q');

var findList = Q.nbind(List.findOne, List);
var findItem = Q.nbind(Item.findOne, Item);

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
			// console.log('found item', item);
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
				// console.log('currentList', currentList);
				// console.log('currentItem', currentItem);
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

	retriveListItems: function(res, req) {

	}
}
