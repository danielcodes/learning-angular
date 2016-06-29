'use strict';

eventsApp.controller('EventController',
	//a controller creates scope, pass in empty scope?
	//the controller can take in services
	function EventController($scope, eventData, $routeParams, $route){

		$scope.sortorder = 'name';
		$scope.event = $route.current.locals.event;
		console.log($route.current);

		//accessing parameters from the route
		/*eventData.getEvent($routeParams.eventId)*/
			//.$promise
			//.then( function(event){ $scope.event = event; console.log(event);	})
			//.catch(function(response){ console.log(response);	});

		$scope.upVoteSession = function(session){
			session.upVoteCount++;	
		};

		$scope.downVoteSession = function(session){
			session.upVoteCount--;	
		};

	}
);


