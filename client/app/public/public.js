angular.module('foodBuddy.public', [])

.controller('PublicCtrl', function($scope, Public) {
  $scope.item = {};
  $scope.stores = ['Safeway', 'Trader Joes', 'Whole Foods']

  $scope.updatePrice = function() {
  	var itemToSend = {};
  	itemToSend.name = $scope.item.name;
  	itemToSend[$scope.item.selectedStore] = parseFloat($scope.item.price, 10);
    if ($scope.isValid()) {
      Public.updatePrice(itemToSend)
      .then(function(res){
      	$scope.retriveAllItems();
      }); 
    }
  };

  $scope.isValid = function() {
  	return (!$scope.item.price || $scope.item.price < 0 || !$scope.item.price.match(/[0-9]+(\.[0-9][0-9]?)?/)) ? false : true;
  };

  $scope.retriveAllItems = function() {
		Public.retriveAllItems()
		.then(function(data){
			console.log('data retrived: ', $scope.lists);
			$scope.lists = data;
		})
		.catch(function(err){
			console.log(err);
		})
  }

  $scope.retriveAllItems();

})