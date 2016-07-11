angular.module('foodBuddy', [
	'foodBuddy.services',
	'foodBuddy.report',
	'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('report', {
      url: '/',
      templateUrl: '/app/report/report.html',
      controller: 'ReportCtrl'
    })
});