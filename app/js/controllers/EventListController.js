'use strict';

eventsApp.controller('EventListController',
	//a controller creates scope, pass in empty scope?
	//the controller can take in services
	function EventListController($scope, $location, eventData, $route){

		console.log($route.current);
		//looking for the value from resolve
		$scope.events = $route.current.locals.events;

	}
);


