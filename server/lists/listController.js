var List = require('./listModel');
var User = require('../users/userModel');

var Q = require('q');

var findUser = Q.nbind(User.findOne, User);

var findAllList = Q.nbind(List.find, List);
var findList = Q.nbind(List.findOne, List);
var createList = Q.nbind(List.create, List);
var removeList = Q.nbind(List.remove, List);

module.exports = {
	retriveAllLists: function(req, res) {
		// console.log('getting all list', req.query.username );
		findUser({ username: req.query.username })
		.then(function(user) {
			console.log('found user:', user);
			return findAllList({ userId: user._id })
		})
		.then(function(lists){
			console.log('sending lists:', lists);
			res.json(lists);
		})
    .fail(function (error) {
    	console.log('fail retrive lists');
			res.status(500).send({error: "cannot retrive lists"});
    });
	},

	createNewList: function(req, res) {
		var currentUser;
		console.log('creating req.body.username', req.body);
		findUser({ username: req.body.username })
		.then(function(user) {
			console.log(user);
			currentUser = user;
			return findList({ userId: user._id, name: req.body.name });
		})
		.then(function(list){
			if (list) {
				console.log('list exsits');
				res.status(500).send({error: "list already exist"});
			} else {
				console.log('creating list')
				return createList({
					name: req.body.name,
					userId: currentUser._id
				});
			}
		})
		.then(function(lists){
			res.status(201).send('created list');
		})
    .fail(function (error) {
    	console.log('fail retrive lists');
			res.status(500).send({error: "cannot retrive lists"});
    });
	},

	remove: function(req, res) {
		findUser({ username: req.body.username })
		.then(function(user) {
			console.log('remove found:', user);
			return findList({ userId: user._id, name: req.body.name })
		})
		.then(function(list){
			//remove corresponding listItems
			console.log('deleting list', list);
			return removeList({ name: req.body.name });
		})
		.then(function(list) {
			res.status(202).send('deleted list');
		})
    .fail(function (error) {
    	console.log('fail to delete lists');
			res.status(500).send({error: "cannot retrive lists"});
    });
	}
}


