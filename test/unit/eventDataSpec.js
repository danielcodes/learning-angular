'use strict';

describe('eventData', function(){

	beforeEach(module('eventsApp'));

	it('should issue GET to /data/event/11 when getEvent is called with id 11', 
		inject(function(eventData, $httpBackend){

			$httpBackend.expectGET('/data/event/11');
			$httpBackend.when('GET', '/data/event/11').respond({});
			eventData.getEvent(11);
			$httpBackend.flush();

			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		})
	);
});
