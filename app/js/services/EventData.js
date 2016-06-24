'use strict';

eventsApp.factory('eventData', function($resource){
	return {
		
		//using promises..
		getEvent: function(){
			//return $http({method: 'GET', url: '/data/event/1'});
			return $resource('/data/event/:id', {id: '@id'}).get({id: 1});
		}

	};


});
