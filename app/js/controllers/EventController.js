'use strict';

eventsApp.controller('EventController',
	//a controller creates scope, pass in empty scope?
	//the controller can take in services
	function EventController($scope, eventData, $log){

		$scope.sortorder = 'name';

		//this takes over the success, error nonsense
		//got back a resource
		eventData.getEvent()
			.$promise
			.then( function(event){ $scope.event = event; console.log(event);	})
			.catch(function(response){ console.log(response);	});

		$scope.upVoteSession = function(session){
			session.upVoteCount++;	
		};

		$scope.downVoteSession = function(session){
			session.upVoteCount--;	
		};

	}
);


