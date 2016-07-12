angular.module('foodBuddy.services', [])

.factory('Report', function($http) {
	var updatePrice = function(updatedItem) {
		return $http({
      method: 'POST',
      url: '/items',
      data: updatedItem
		}).then(function(resp) {
      console.log('data sent');
      return resp;
    });
	};

  return {
    updatePrice: updatePrice,
  };
})

.factory('Public', function($http) {
  var retriveAllItems = function() {
    console.log('calling retriveAllItems');
    return $http({
      method: 'GET',
      url: '/items',
    }).then(function(resp) {
      return resp.data;
    }).catch(function(err) {
      console.log(err);
    })
  };

  return {
    retriveAllItems: retriveAllItems,
  };
})