'use strict';

eventsApp.controller('CookieSampleController',
	function CookieSampleController($scope, $cookieStore){

		$scope.event = {id: 1, name: "my event"};

		//just an object with 3 methods
		console.log($cookieStore);

		$scope.saveEventToCookie = function(event){
			//pass key and value
			$cookieStore.put('event', event);	
		};

		$scope.getEventFromCookie = function(event){
			console.log($cookieStore.get('event'));	
		};

		$scope.removeEventToCookie = function(event){
			$cookieStore.remove('event');	
		};




	}
);


