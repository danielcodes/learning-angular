'use strict';

//chain the app
eventsApp.directive('sessionThumbnail', function(){
	//return a directive definition object
	return {
		restrict: 'E',
		replace: true,
		template: '<div class="row session"> <div ng-transclude></div> </div>',
		transclude: true
	};
});

