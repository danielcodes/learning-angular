'use strict';

eventsApp.controller('EventController',
	//a controller creates scope, pass in empty scope?
	//the controller can take in services
	function EventController($scope, eventData, $log){

		$scope.sortorder = 'name';

		//this takes over the success, error nonsense
		eventData.getEvent()
			.success(function(event){ $scope.event = event; })
			.error(function(data, status, headers, config){
				$log.warn(data, status, headers, config);
			});

				


		$scope.upVoteSession = function(session){
			session.upVoteCount++;	
		};

		$scope.downVoteSession = function(session){
			session.upVoteCount--;	
		};

	}
);


