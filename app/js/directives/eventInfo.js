'use strict';

eventsApp.directive('eventInfo', function(){
	//return a directive definition object
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/templates/directives/eventInfo.html',
		//an events needs to be passed
		scope: {
			//can also use @ and &
			event: "=event"	
		}
	};
});

