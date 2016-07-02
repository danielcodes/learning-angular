'use strict';

describe('EventListController', function(){

	var $controllerConstructor, scope, mockEventData;

	beforeEach(module("eventsApp"));

	//not sure what happened here
	beforeEach(inject(function($controller, $rootScope){
		$controllerConstructor = $controller;		
		scope = $rootScope.$new();
		//create eventData object, controlled
		mockEventData = sinon.stub({ getAllEvents: function(){} });
	}));

	it('should set the scope events to the result of eventData.getAllEvents', function(){
		var mockEvents = {};
		//mocks eventData service
		mockEventData.getAllEvents.returns(mockEvents);
		
		//need to pass in dependencies of the controller, scope and eventData
		$controllerConstructor("EventListController", 
				{'$scope': scope, eventData: mockEventData});

		expect(scope.events).toBe(mockEvents);	
	
	});
});
