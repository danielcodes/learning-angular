'use strict';

//chain the app
eventsApp.directive('greeting', function(){
	//return a directive definition object
	return {
		restrict: 'E',
		replace: true,
		template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
		controller: 'GreetingController'
	};
});

//defing the controller outside
eventsApp.controller('GreetingController',
		function GreetingController($scope){
			$scope.sayHello = function(){
				alert('hello');	
			};
		});

