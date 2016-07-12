var List = require('./listModel');
var User = require('./userModel');

var Q = require('q');

var findUser = Q.nbind(User.findOne, User);

var findAllList = Q.nbind(List.findOne, List);
var findList = Q.nbind(List.findOne, List);
var createList = Q.nbind(List.create, List);
var removeList = Q.nbind(List.remove, List);

module.exports = {
	retriveAllLists: function(res, req) {
		findUser({ username: req.body.username })
		.then(function(user) {
			return findAllList({ userId: user._id })
		})
		.then(function(lists){
			res.json(lists);
		})
    .fail(function (error) {
    	console.log('fail retrive lists');
			res.status(500).send({error: "cannot retrive lists"});
    });
	}

	createList: function(res, req) {
		findUser({ username: req.body.username })
		.then(function(user) {
			return findList({ userId: user._id, name: req.body.listName })
		})
		.then(function(list){
			if (list) {
				res.status(500).send({error: "user already exist"});
			} else {
				return createList({
					userId: user._id,
					name: req.body.listName
				});
			}
		})
		.then(function(lists){
    	console.log('successfully create lists: ', lists);
		})
    .fail(function (error) {
    	console.log('fail retrive lists');
			res.status(500).send({error: "cannot retrive lists"});
    });
	}

	remove: function(res, req) {
		findUser({ username: req.body.username })
		.then(function(user) {
			return findList({ userId: user._id, name: req.body.listName })
		})
		.then(function(list){
			//remove corresponding listItems
			console.log('deleting list', list);
			return removeList({ name: req.body.listName });
		})
    .fail(function (error) {
    	console.log('fail to delete lists');
			res.status(500).send({error: "cannot retrive lists"});
    });
	}
}


