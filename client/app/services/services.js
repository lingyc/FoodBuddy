angular.module('foodBuddy.services', [])

.factory('Report', function($http) {
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