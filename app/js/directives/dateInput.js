'use strict';

//chain the app
eventsApp.directive('dateInput', function(){
	//some problems that may arise, parent scope for event.date
	//the directive may not mix well
	return {
		restrict: 'E',
		replace: true,
		template: '<input id="eventDate" type="text" required ng-model="event.date" placeholder="format (mm/dd/yyyy)...">',
		link: function(scope, element){
			element.datepicker();	
		}
	};
});

