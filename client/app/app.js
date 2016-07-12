angular.module('foodBuddy', [
	'foodBuddy.services',
	'foodBuddy.public',
  'ui.grid',
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

});