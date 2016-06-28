'use strict';

eventsApp.controller('EventListController',
	//a controller creates scope, pass in empty scope?
	//the controller can take in services
	function EventListController($scope, $location, eventData){

		$scope.events = eventData.getAllEvents();

	}
);


