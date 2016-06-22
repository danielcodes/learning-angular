'use strict';

eventsApp.controller('EventController',
	//a controller creates scope, pass in empty scope?
	function EventController($scope){

		//objects in scope become available to the controller
		//event item
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2013',
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				province: 'CA'
			},
			imageUrl: '/img/angularjs-logo.png'
		};
	
	}
);
