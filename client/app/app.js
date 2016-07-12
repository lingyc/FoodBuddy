angular.module('foodBuddy', [
	'foodBuddy.services',
	'foodBuddy.public',
  'foodBuddy.auth',
  'foodBuddy.private',  
  // 'ui.grid',
	'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('public', {
      url: '/',
      templateUrl: '/app/public/public.html',
      controller: 'PublicCtrl'
    })
    .state('signin', {
      url: '/signin',
      templateUrl: '/app/auth/signin.html',
      controller: 'AuthCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '/app/auth/signup.html',
      controller: 'AuthCtrl'
    })
    .state('private', {
      url: '/private',
      templateUrl: '/app/private/private.html',
      controller: 'PrivateCtrl'
    })

  $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {

  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('foodBuddy');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {

  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});