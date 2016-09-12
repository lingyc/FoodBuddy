angular.module('foodBuddy.auth', [])

.controller('AuthCtrl', function($scope, $http, $window, $location, Auth) {
	$scope.user = {};
	$scope.loginFailed = true;
	$scope.userExist = true;

	$scope.signin = function() {
		Auth.signin($scope.user)
		.then(function(token) {
			$window.localStorage.setItem('foodBuddy', token);
			$scope.loginFailed = true;
			$location.path('/lists');
		})
		.catch(function(err){
			$scope.loginFailed = false;
			console.log(err);
		})
	};

	$scope.signup = function() {
		Auth.signup($scope.user)
		.then(function(token) {
			$window.localStorage.setItem('foodBuddy', token);
			$scope.userExist = true;
			$location.path('/lists');
		})
		.catch(function(err){
			$scope.userExist = false;
			console.log(err);
		})
	};

	$scope.logout = function() {
		Auth.signOut();
	}
})