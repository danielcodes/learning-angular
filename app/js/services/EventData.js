'use strict';

eventsApp.factory('eventData', function($http, $log){
	return {
		
		//looking to retrieve data via ajax
		getEvent: function(successcb){
			$http({method: 'GET', url: '/data/event/1'}).
				//this starts the get, on success, it calls another function
				success(function(data, status, headers, config){
					//forgot to pass the data back to the callback
					successcb(data);
				}).
				error(function(data, status, headers, config){
					$log.warn(data, status, headers, config);
				});
		}

	};


});
