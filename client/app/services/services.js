angular.module('foodBuddy.services', [])

.factory('Report', function($http) {
	var updatePrice = function(updatedItem) {
		return $http({
      method: 'POST',
      url: '/foodBuddy/items',
      data: updatedItem
		}).then(function(resp) {
      return resp;
    });
	};

  return {
    updatePrice: updatePrice,
  };
})