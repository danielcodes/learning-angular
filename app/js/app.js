'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
		.config(function($routeProvider, $locationProvider){
			//returns a module
			$routeProvider.when('/newEvent',
				{
					templateUrl: 'templates/NewEvent.html',
					controller: 'EditEventController'
				});	
			$routeProvider.when('/events',
				{
					templateUrl: 'templates/EventList.html',
					controller: 'EventListController',
					resolve: {
						events: function(eventData){
							//why does $promise have to be called?
							return eventData.getAllEvents().$promise;
						}
					}
				});
			$routeProvider.when('/event/:eventId',
				{
					templateUrl: 'templates/EventDetails.html',
					controller: 'EventController',
					//no idea whats going on here
					resolve: {
						//passing this event, which is a promise value
						event: function($route, eventData){
							return eventData.getEvent($route.current.pathParams.eventId).$promise;	
						}	
					}
				});
			$routeProvider.when('/editProfile',
				{
					templateUrl: 'templates/EditProfile.html',
					controller: 'EditProfileController'
				});
			$routeProvider.when('/about',
				{
					template: 'Created this app from the Pluralsight course, Angular Fundamentals',
				});
			$routeProvider.when('/sampleDirective',
				{
					templateUrl: 'templates/SampleDirective.html',
					controller: 'SampleDirectiveController'
				});
			$routeProvider.otherwise({redirectTo: '/events'});
			$locationProvider.html5Mode(true);
		});




