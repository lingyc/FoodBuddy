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

.factory('Auth', function($http, $window, $location) {
  var signin = function(user) {
    return $http({
      method: 'POST',
      url: '/signin',
      data: user
    }).then(function(resp) {
      console.log('login info sent');
      return resp.data.token;
    });
  };

  var signup = function(user) {
    return $http({
      method: 'POST',
      url: '/signup',
      data: user
    }).then(function(resp) {
      console.log('signup info sent');
      return resp.data.token;
    });
  };

  var isAuth = function() {
    return !!$window.localstorage.getItem('foodBuddy');
  };

  var signOut = function() {
    $window.localstorage.removeItem('foodBuddy');
    $location.path('/signin')
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signOut: signOut
  }
})