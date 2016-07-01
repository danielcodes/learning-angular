'use strict';

//chain the app
eventsApp.directive('datePicker', function($compile){
	//return a directive definition object
	return {
		restrict: 'A',
		link : function(scope, element){
			element.datepicker();	
		}
	};
});

