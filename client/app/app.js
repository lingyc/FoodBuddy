angular.module('foodBuddy', [
	'foodBuddy.services',
	'foodBuddy.public',
  'foodBuddy.auth',
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
});