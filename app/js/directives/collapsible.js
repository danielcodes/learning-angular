'use strict';

//chain the app
eventsApp.directive('collapsible', function(){
	//return a directive definition object
	return {
		restrict: 'E',
		replace: true,
		template: '<div><h4 class="well-title" ng-click="toggleVisibility()">{{title}}</h4> <div ng-show="visible" ng-transclude></div> </div>',
		controller: function($scope){

			$scope.visible = true;

			$scope.toggleVisibility = function(){
				$scope.visible = !$scope.visible;
			};
				
		},
		transclude: true,
		scope: {
			title: '@'	
		}
	};
});

