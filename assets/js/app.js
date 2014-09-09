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
	.state('app.customers', {
		url: '/customers',
		controller: 'CustomersCtrl',
		templateUrl: 'partials/app.customers.html'
	})
});