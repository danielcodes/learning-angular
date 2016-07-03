'use strict';

//describeception
//userResource is a wrapper around $resource
//need to mock this dependency service
describe('userData', function(){

	var mockUserResource; 

	beforeEach(module('eventsApp'));

	beforeEach(function(){
		mockUserResource = sinon.stub({ get: function(){}, save: function(){} });
		module(function($provide){
			//tells angular to use the mock
			$provide.value('userResource', mockUserResource);
		});
	});

	describe('getUser', function(){

		it('should call getresource.get with the username', inject(function(userData){
			userData.getUser('bob');

			//args is an arrays that contains an array of the actual args
			//thus the first 0 index access
			expect(mockUserResource.get.args[0][0]).toEqual({userName: 'bob'});
		}));

		it('should return whatever userResource.get returns', inject(function(userData){
			mockUserResource.get.returns('angular rocks');
			var result = userData.getUser('bob');	

			expect(result).toBe('angular rocks');;
		}));
	});

	describe('save', function(){
	
		it('should call userResource.save with the same parameter', inject(function(userData){
		
			userData.save('some value');
			expect(mockUserResource.save.calledWith('some value')).toBe(true);	
		}));	

	});


});


