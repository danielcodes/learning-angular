'use strict';

eventsApp.controller('EventListController',
	//a controller creates scope, pass in empty scope?
	//the controller can take in services
	function EventListController($scope, eventData){

		//console.log($route.current);
		//looking for the value from resolve
		//$scope.events = $route.current.locals.events;
		
		$scope.events = eventData.getAllEvents(); 

	}
);


