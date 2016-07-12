angular.module('foodBuddy.services',[])

.factory('User', function ($rootScope) {
  var user = {};
  return {
    set: function (username) {
      user.username = username;
    },
    get: function () {
      return user.username;
    }
  };
})

.factory('CurrentList', function ($rootScope) {
  var currentlist = {};
  return {
    set: function (currentlistName) {
      currentlist.name = currentlistName;
    },
    get: function () {
      return currentlist.name;
    }
  };
})

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

.factory('Private', function($http, User) {
  var retriveAllLists = function(user) {
    // console.log('this is user:',user);
    return $http({
      method: 'GET',
      url: '/lists',
      params: {username: user.username}
    }).then(function(resp) {
      return resp.data;
    });
  }

  var createList = function(newList) {
    return $http({
      method: 'POST',
      url: '/addlist',
      data: newList
    }).then(function(resp) {
      console.log('server response:', resp);
      return resp;
    });
  }

  var removeList = function(list) {
    return $http({
      method: 'POST',
      url: '/removelist',
      data: list
    }).then(function(resp) {
      return resp;
    });

  }

  var retriveListItems = function(list) {
    return $http({
      method: 'GET',
      url: '/list_items',
      params: {username: user.username}
    }).then(function(resp) {
      console.log('data sent');
      return resp.data;
    });
  }

  var addItemToList = function(item) {
    return $http({
      method: 'POST',
      url: '/add_list_items',
      data: item
    }).then(function(resp) {
      console.log('data sent');
      return resp;
    });
  }

  var removeItemToList = function(item) {
    return $http({
      method: 'POST',
      url: '/remove_list_items',
      data: item
    }).then(function(resp) {
      console.log('data sent');
      return resp;
    });
  }

  return {
    retriveAllLists: retriveAllLists,
    createList: createList,
    removeList: removeList,
    retriveListItems: retriveListItems,
    addItemToList: addItemToList,
    removeItemToList: removeItemToList
  }
})



.factory('Auth', function($http, $window, $location, User) {
  var signin = function(user) {
    return $http({
      method: 'POST',
      url: '/signin',
      data: user
    }).then(function(resp) {
      console.log('login info sent', resp.data.token);
      User.set(user.username)
      console.log(User.get());
      return resp.data.token;
    })
    .catch(function(err){
      console.log(err);
    })
  };

  var signup = function(user) {
    return $http({
      method: 'POST',
      url: '/signup',
      data: user
    }).then(function(resp) {
      console.log('signup info sent', resp.data.token);
      User.set(user.username)
      return resp.data.token;
    })
    .catch(function(err){
      console.log(err);
    })
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