'use strict';

eventsApp.controller('EditEventController',
	function EditEventController($scope, eventData){

		$scope.saveEvent = function(event, newEventForm){
			if(newEventForm.$valid){

				//calling the service
				//the response just returns back the event
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
