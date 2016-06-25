'use strict';

eventsApp.factory('eventData', function($resource){

	var resource = $resource('/data/event/:id', {id: '@id'});
	var highestId = $resource('/data/highesteventid');
	
	return {
		
		//using promises..
		getEvent: function(){
			//gives back json
			return resource.get({id: 1});
		},
		save: function(event){

			//TODO
			//need a function here that gives the highest ID
			console.log('the highestId is ', highestId.get());

			//call GET on the resource and pass a callback that takes the id
			highestId.get(function(data){
				//done through a cb, cus I don't know promises, yet	
				
				console.log('the is is ', data.id);

			});

			
			event.id = 999;

			//this broke the promise like usage in the controller, oh
			return resource.save(event);	
		}

	};


});
