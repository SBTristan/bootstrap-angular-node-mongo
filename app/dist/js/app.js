'use strict';

var app = angular.module('app', ['ui.router', 'appControllers', 'appServices', 'appDirectives', 'appFilters']);
var appControllers = angular.module('appControllers', []);
var appServices = angular.module('appServices', []);
var appDirectives = angular.module('appDirectives', []);
var appFilters = angular.module('appFilters', []);

app.constant('Options', {baseUrl: 'http://localhost:3000'});

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		url: '/home',
		controller: 'HomeCtrl',
		templateUrl: 'partials/home.html'
	})
	.state('app', {
		url: '/app/:uid',
		abstract: true,
		controller: 'AppCtrl',
		templateUrl: 'partials/app.html'
	})
	.state('app.dashboard', {
		url: '/dashboard',
		controller: 'DashboardCtrl',
		templateUrl: 'partials/app.dashboard.html'
	})
});
appControllers.controller('HomeCtrl', ['$scope', '$http',
	function HomeCtrl($scope, $http) {
		
		$scope.welcome = "Landing page for App!";
	}
]);


appControllers.controller('AppCtrl', ['$scope', '$http', '$stateParams',
	function AppCtrl($scope, $http, $stateParams) {

		$scope.uid = $stateParams.uid;

	}
]);

appControllers.controller('DashboardCtrl', ['$scope', '$http', '$stateParams',
	function DashboardCtrl($scope, $http, $stateParams) {

		/* Accessible because sub state */
		$scope.uid = $stateParams.uid;

	}
]);


appServices.factory('MyService', function() {
	return {
		hello: 'world'
	};
});