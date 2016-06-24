'use strict';

eventsApp.factory('eventData', function($http){
	return {
		
		//using promises..
		getEvent: function(){
			//what doese tihs actually return? a promise, hmmmm
			return $http({method: 'GET', url: '/data/event/1'});
		}

	};


});
