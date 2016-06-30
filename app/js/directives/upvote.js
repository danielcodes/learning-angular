'use strict';

eventsApp.directive('upvote', function(){
	return {
		restrict: 'E',
		templateUrl: '/templates/directives/upvote.html',
		scope: {
			//where are the methods coming from??
			//these local scope props are bound to functions
			upvote: "&",
			downvote: "&",
			count: "="		
		}
	};
});

