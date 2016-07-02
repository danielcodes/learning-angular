'use strict';

describe('EditProfileControllerSpec', function(){
	var $controllerConstructor, scope, mockGravatarUrlBuilder;

	beforeEach(module("eventsApp"));

	//not sure what happened here
	beforeEach(inject(function($controller, $rootScope){
		$controllerConstructor = $controller;		
		scope = $rootScope.$new();
		mockGravatarUrlBuilder= sinon.stub({ buildGravatarUrl: function(){} });
	}));

	//test the email that goes into the function, is the same one when calling the service
	it('should build the gravatar with the given email', function(){
		//mock the service again
		$controllerConstructor("EditProfileController", 
			{'$scope': scope, gravatarUrlBuilder: mockGravatarUrlBuilder});	

		var email = "dan@dan.com";

		//function exists on the scope, not controller
		scope.getGravatarUrl(email);

		expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
	
	});


});

