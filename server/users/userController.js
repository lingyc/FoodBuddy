var User = require('./userModel');
var Q = require('q');
var jwt = require('jwt-simple');

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {
	signin: function(req, res) {
		findUser({ username: req.body.username })
		.then(function(user) {
			if (user) {
				if (user.password === req.body.password) {
          var token = jwt.encode(user, 'secret');
					console.log('user authenticated token', token);
          res.json({token: token});
          console.log('sending token signin');
				} else {
					console.log('wrong password');
					res.status(500).send({error: "wrong password"});					
				}
			} else {
				console.log('no user');
				res.status(500).send({error: "user not exit"});
			}
		})
    .fail(function (error) {
			res.status(500).send({error: "cannot signin user"});
    });
	},

	signup: function(req, res) {
		findUser({ username: req.body.username })
		.then(function(user) {
			if (user) {
				console.log('user already exist');
				res.status(500).send({error: "user already exit"});
			} else {
				console.log('creating user');
				console.log(req.body);
				return createUser({ 
					username: req.body.username,
					password: req.body.password
				})
			}
		})
		.then(function(user) {
      var token = jwt.encode(user, 'secret');
      console.log('sending token signup', token);
      res.json({token: token});
		})
    .fail(function (error) {
    	console.log('fail to create user');
			res.status(500).send({error: "cannot signup user"});
    });
	}
}