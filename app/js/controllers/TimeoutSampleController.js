'use strict';

eventsApp.controller('TimeoutSampleController',
	function TimeoutSampleController($scope, $timeout){

		var promise = $timeout(function(){
			$scope.name = "Daniel Chia";	
		}, 3000);

		$scope.cancel = function(){
			$timeout.cancel(promise);	
		};

	}
);


