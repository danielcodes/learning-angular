'use strict';

eventsApp.controller('EventController',
	//a controller creates scope, pass in empty scope?
	//the controller can take in services
	function EventController($scope, eventData){

		$scope.sortorder = 'name';

		//calling ajax service
		//event data is the service, has data in event
		eventData.getEvent(function(event){
			$scope.event = event;	
			console.log('the event is ', event);
		});

		$scope.upVoteSession = function(session){
			session.upVoteCount++;	
		};

		$scope.downVoteSession = function(session){
			session.upVoteCount--;	
		};

	}
);


