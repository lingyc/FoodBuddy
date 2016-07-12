angular.module('foodBuddy', [
	'foodBuddy.services',
	'foodBuddy.report',
	'foodBuddy.public',
  'ui.grid',
	'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('report', {
      url: '/report',
      templateUrl: '/app/report/report.html',
      controller: 'ReportCtrl'
    })
    .state('public', {
      url: '/',
      templateUrl: '/app/public/public.html',
      controller: 'PublicCtrl'
    })

});