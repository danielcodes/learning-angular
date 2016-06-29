'use strict';

eventsApp.directive('eventThumbnail', function($compile){
	//return a directive definition object
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/templates/directives/eventThumbnail.html'
	};
});

