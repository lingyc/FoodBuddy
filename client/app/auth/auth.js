angular.module('foodBuddy.auth', [])

.controller('AuthCtrl', function($scope, $http, $window, $location, Auth) {
	$scope.user = {};

	$scope.signin = function() {
		Auth.signin($scope.user)
		.then(function(token) {
			$window.localStorage.setItem('foodBuddy', token);
			$location.path('/lists');
		})
		.catch(function(err){
			console.log(err);
		})
	};

	$scope.signup = function() {
		Auth.signup($scope.user)
		.then(function(token) {
			$window.localStorage.setItem('foodBuddy', token);
			$location.path('/lists');
		})
		.catch(function(err){
			console.log(err);
		})
	};

	$scope.logout = function() {
		Auth.signout();
	}
})