'use strict';

eventsApp.controller('CompileSampleController',
	function CompileSampleController($scope, $compile){

		$scope.appendDivToElement = function(markup){
			//weird chain, 
			return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
		};

	}
);


