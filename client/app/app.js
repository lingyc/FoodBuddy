angular.module('foodBuddy', [
	'ui-router'
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	$urlRouterProvider.otherwise('/')
})