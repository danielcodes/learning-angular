'use strict';

//chain the app
eventsApp.directive('gravatar', function(gravatarUrlBuilder){
	//return a directive definition object
	return {
		restrict: 'E',
		template: '<img />',
		replace: true,
		link: function(scope, element, attrs, controller){
			//use attrs
			//attribute to observe and a func to watch when something changes
			attrs.$observe('email', function(newValue, oldValue){
				if (newValue !== oldValue){
					//setting src on img elemnt not gravata
					attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
				}
			});
		}	
	};
});

