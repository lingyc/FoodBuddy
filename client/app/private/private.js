angular.module('foodBuddy.private', [])

.controller('PrivateCtrl', function($scope, Private, User, CurrentList) {
	$scope.user = {};
  $scope.stores = ['Safeway', 'Trader Joes', 'Whole Foods']
  $scope.user.username = User.get();
  $scope.allGroceryItems;

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

  $scope.setCurrentList = function(listName) {
    CurrentList.set(listName);
    console.log(CurrentList.get());
  }

  $scope.retriveListItems = function() {
    
  }

  $scope.addListItem = function(itemName) {
    var itemObj = {};

    itemObj.username = $scope.user.username;
    itemObj.listName = CurrentList.get();
    itemObj.itemName = itemName;

    console.log('item to add:', itemObj);
    Private.addItemToList(itemObj)
    .then(function(resp){
      console.log(resp);
    })
  }

  $scope.removeListItem = function(itemName) {
    
  }

  $scope.retriveAllLists();
})

