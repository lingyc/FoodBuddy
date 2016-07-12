angular.module('foodBuddy.report', [])

.controller('ReportCtrl', function($scope, Report) {
  $scope.item = {};
  $scope.stores = ['Safeway', 'Trader Joes', 'Whole Foods']

  $scope.updatePrice = function() {
  	var itemToSend = {};
  	itemToSend.name = $scope.item.name;
  	itemToSend[$scope.item.selectedStore] = parseFloat($scope.item.price, 10);
    if ($scope.isValid()) {
      Report.updatePrice(itemToSend); 
    }
  };

  $scope.isValid = function() {
  	return (!$scope.item.price || $scope.item.price < 0 || !$scope.item.price.match(/[0-9]+(\.[0-9][0-9]?)?/)) ? false : true;
  };
})