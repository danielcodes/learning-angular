'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
		.config(function($routeProvider){
			//returns a module
			$routeProvider.when('/newEvent',
				{
					templateUrl: 'templates/NewEvent.html',
					controller: 'EditEventController'
				});	
			$routeProvider.when('/events',
				{
					templateUrl: 'templates/EventList.html',
					controller: 'EventListController'
				});
			$routeProvider.when('/event/:eventId',
				{
					templateUrl: 'templates/EventDetails.html',
					controller: 'EventController'
				});
			//default route
			$routeProvider.otherwise({redirectTo: '/events'});

		});
