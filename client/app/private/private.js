angular.module('foodBuddy.private', [])

.controller('PrivateCtrl', function($scope, Private, User, CurrentList, $rootScope) {
	$scope.user = {};
  $scope.stores = ['Safeway', 'Trader Joes', 'Whole Foods']
  $scope.user.username = User.get();
  $scope.allGroceryItems;
  $scope.allListItems;
  $scope.totalPrice;

  $scope.retriveAllLists = function() {
  	console.log('retriveing list for', $scope.user);
  	Private.retriveAllLists($scope.user)
  	.then(function(lists){
      console.log('retrived list:', lists)
  		$scope.lists = lists;
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
    $rootScope.$emit('changeCurrentList');
  }

  $scope.retriveListItems = function() {
    var itemObj = {};

    itemObj.username = $scope.user.username;
    itemObj.listName = CurrentList.get();

    console.log('item to retrive:', itemObj);
    Private.retriveListItems(itemObj)
    .then(function(data){
      console.log(data);
      $scope.allListItems = data;
      $scope.getTotalPrice(data);
    })
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
      $scope.retriveListItems();
    })
  }

  $scope.removeListItem = function(itemName) {
    
  }

  $scope.getTotalPrice = function(data) {
    var total = {
      safeway: 0,
      traderjoes: 0,
      wholefoods: 0
    };
    for (var i = 0; i < data.length; i++) {
      total.safeway += data[i].itemId['Safeway']
      total.traderjoes += data[i].itemId['Trader Joes']
      total.wholefoods += data[i].itemId['Whole Foods']
    }
    $scope.totalPrice = total;
  }

  $rootScope.$on('changeCurrentList', $scope.retriveListItems);
  $scope.retriveAllLists();
})

