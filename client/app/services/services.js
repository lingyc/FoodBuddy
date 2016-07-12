angular.module('foodBuddy.services',[])

.factory('Public', function($http) {
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
    updatePrice: updatePrice,
    retriveAllItems: retriveAllItems,
  };
})