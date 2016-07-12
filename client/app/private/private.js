angular.module('foodBuddy.private', [])

.controller('PrivateCtrl', function($scope, Private, User) {
	$scope.user = {};
	$scope.user.username = User.get();
	// $scope.lists = [];
	$scope.currentList;

  $scope.retriveAllLists = function() {
  	console.log('retriveing list for', $scope.user);
  	Private.retriveAllLists($scope.user)
  	.then(function(lists){
      console.log('retrived list:', lists)
  		$scope.lists = lists;
  		//should i also retrive listItem here too?
  	})
  }

  $scope.createList = function(listName) {
  	var listObj = {};
  	listObj.username = $scope.user.username;
  	listObj.name = listName;
  	console.log('sending list', listObj);
  	Private.createList(listObj)
  	.then(function(resp){
      console.log('calling retriveAllLists after createList');
      $scope.retriveAllLists();
  	})
  }

  $scope.removeList = function(listName) {
  	var listObj = {};
  	listObj.username = $scope.user.username;
  	listObj.name = listName;

  	Private.removeList(listObj)
  	.then(function(resp){
      console.log('calling retriveAllLists after removeList');
      $scope.retriveAllLists();
  	})
  }

  $scope.retriveAllLists();
})

