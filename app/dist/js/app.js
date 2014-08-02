'use strict';

var app = angular.module('app', ['ui.router', 'appControllers', 'appServices', 'appDirectives', 'appFilters']);
var appControllers = angular.module('appControllers', []);
var appServices = angular.module('appServices', []);
var appDirectives = angular.module('appDirectives', []);
var appFilters = angular.module('appFilters', []);

app.constant('Options', {baseUrl: 'http://localhost:3001'});

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

appControllers.controller('DashboardCtrl', ['$scope', '$http', '$state', '$stateParams', 'MyService',
	function DashboardCtrl($scope, $http, $state, $stateParams, MyService) {

		/* Accessible because sub state */
		$scope.uid = $stateParams.uid;

		$scope.fetchData = function() {
			MyService.read($stateParams.uid).then(function(data) {
				$scope.data = data;
			});
		}

		$scope.returnHome = function() {
			return $state.go('home', {param1: 'arg1'});
		}
	}
]);


appServices.factory('MyService', function($http, $q, Options) {
	return {
		read: function(id) {
			var deferred = $q.defer();

			$http.get(Options.baseUrl + '/read/' + id).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		create: function(data) {
			var deferred = $q.defer();

			$http.post(Options.baseUrl + '/create', {data: "my data"}).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		edit: function(data) {
			var deferred = $q.defer();

			$http.put(Options.baseUrl + '/edit', {data: "my data"}).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},

		delete: function(id) {
			var deferred = $q.defer();

			$http.delete(Options.baseUrl + '/delete/' + id).success(function(data) {
				deferred.resolve(data);
			}).error(function(data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		}
	};
});