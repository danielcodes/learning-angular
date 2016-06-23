'use strict';

eventsApp.controller('EventController',
	//a controller creates scope, pass in empty scope?
	//the controller can take in services
	function EventController($scope, eventData){

		$scope.sortorder = 'name';

		//objects in scope become available to the controller
		$scope.event = eventData.event;

		$scope.upVoteSession = function(session){
			session.upVoteCount++;	
		};

		$scope.downVoteSession = function(session){
			session.upVoteCount--;	
		};

	}
);


