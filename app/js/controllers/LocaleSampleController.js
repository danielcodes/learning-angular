'use strict';

eventsApp.controller('LocaleSampleController',
	function LocaleSampleController($scope, $locale){

		//for formatting dates
		$scope.myDate = Date.now();
		$scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

	}
);


