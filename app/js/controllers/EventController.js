'use strict';

eventsApp.controller('EventController',
	//a controller creates scope, pass in empty scope?
	function EventController($scope){

		$scope.snippet = '<span style="color:red;">hi there</span>';
		$scope.boolValue = false;
		$scope.mystyle = {color: 'red'};
		$scope.myclass = "blue";
		$scope.buttonDisabled = true;

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
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directives Masterclass',
					creatorName: 'Bob Smith',
					duration: '1 hr',
					level: 'Advanced',
					abstract: 'In this session you will learn the ins and outs of directives',
					upVoteCount: 0
				},	
				{
					name: 'Scopes for fun and profits',
					creatorName: 'John Deo',
					duration: '30 mins',
					level: 'Introductory',
					abstract: 'This session will take a closer look at scopes',
					upVoteCount: 0
				},	
				{
					name: 'Well Behaved Controllers',
					creatorName: 'Jane Doe',
					duration: '2 hours',
					level: 'Intermmdeiate',
					abstract: 'Controllers are the beggining of everything...',
					upVoteCount: 0
				}
			]
		};

		$scope.upVoteSession = function(session){
			session.upVoteCount++;	
		};

		$scope.downVoteSession = function(session){
			session.upVoteCount--;	
		};

	
	}
);


