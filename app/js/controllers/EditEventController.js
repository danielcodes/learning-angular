'use strict';

eventsApp.controller('EditEventController',
	function EditEventController($scope, eventData){

		$scope.saveEvent = function(event, newEventForm){
			if(newEventForm.$valid){

				console.log('the event is ', event);
				//calling the service
				eventData.save(event)
					.$promise
					.then( function(response) { console.log('success', response) })
					.catch( function(response) { console.log('failure', response) });
			}

		};

		$scope.cancelEdit = function(){
			window.location = "/EventDetails.html";	
		}
	
	}
);
