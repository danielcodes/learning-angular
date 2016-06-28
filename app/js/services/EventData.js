'use strict';

eventsApp.factory('eventData', function($resource){

	var resource = $resource('/data/event/:id', {id: '@id'});
	
	return {
		
		//using promises..
		getEvent: function(){
			return resource.get({id: 1});
		},
		save: function(event){
			event.id = 999;
			return resource.save(event);	
		},
		getAllEvents: function(){
			//like get but returns an array
			return resource.query();
		}

	};


});
