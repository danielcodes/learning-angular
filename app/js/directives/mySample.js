'use strict';

//chain the app
eventsApp.directive('mySample', function($compile){
	//return a directive definition object
	return {
		restrict: 'C',
		template: "<input type='text' ng-model='sampleData'/>{{sampleData}}<br/>",
		scope: {
				
		}
	};
});

