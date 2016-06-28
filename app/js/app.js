'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
		.config(function($routeProvider){
			//returns a module
			$routeProvider.when('/newEvent',
				{
					templateUrl: 'templates/NewEvent.html',
					controller: 'EditEventController'
				});	
		});
