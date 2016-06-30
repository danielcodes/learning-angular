'use strict';

//chain the app
//say hello in different languages
eventsApp.directive('greeting', function(){
		//return a directive definition object
		return {
			restrict: 'E',
			replace: true,
			priority: -1,
			template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
			controller: 'GreetingController'
		};
	})
	.directive('finnish', function(){
		return {
			restrict: 'A',
			require: 'greeting',
			priority: -1,
			terminal: true,
			link: function(scope, elements, attrs, controller){
				controller.addGreeting('hei');	
			}
		};
	})
	.directive('hindi', function(){
		return {
			restrict: 'A',
			require: 'greeting',
			priority: -2,
			link: function(scope, elements, attrs, controller){
				controller.addGreeting('namaste');	
			}

		};
	});


//defing the controller outside
eventsApp.controller('GreetingController',
	function GreetingController($scope){
		var greetings = ['hello'];

		$scope.sayHello = function(){
			alert(greetings.join());	
		};
		//this is used for each separate directive
		this.addGreeting = function(greeting){
			greetings.push(greeting);
		};
	});




