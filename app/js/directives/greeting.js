'use strict';

//chain the app
//say hello in different languages
eventsApp.directive('greeting', function(){
		//return a directive definition object
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button> <div ng-transclude></div> </div>",
			controller: 'GreetingController'
		};
	})
	.directive('finnish', function(){
		return {
			restrict: 'A',
			require: '^greeting',
			link: function(scope, elements, attrs, controller){
				controller.addGreeting('hei');	
			}
		};
	})
	.directive('hindi', function(){
		return {
			restrict: 'A',
			require: '^greeting',
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




