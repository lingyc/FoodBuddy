var User = require('./userModel');
var Q = require('q');

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.findOne, User);

module.exports = {
	signin: function(req, res) {
		findUser({ req.body.username })
		.then(function(user) {
			if (user) {
				if (user.password = req.body.password) {
          var token = jwt.encode(user, 'secret');
          res.json({token: token});
				} else {
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
	}

	signup: function(req, res) {
		findUser({ req.body.username })
		.then(function(user) {
			if (user) {
				console.log('user already exist');
				res.status(500).send({error: "user already exit"});
			} else {
				return createUser({ req.body })
			}
		})
		.then(function(user) {
      var token = jwt.encode(user, 'secret');
      res.json({token: token});
		})
    .fail(function (error) {
			res.status(500).send({error: "cannot signup user"});
    });
	}
}