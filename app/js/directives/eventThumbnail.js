'use strict';

eventsApp.directive('eventThumbnail', function($compile){
	//return a directive definition object
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/templates/directives/eventThumbnail.html',
		//an events needs to be passed
		scope: {
			//can also use @ and &
			event: "=event"	
		}
	};
});

