'use strict';

eventsApp.factory('eventData', function(){
	return {
		
		event: {
			name: 'Angular Boot Camp',
			date: 1359781015626,
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				province: 'CA'
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directives Masterclass introductory',
					creatorName: 'Bob Smith',
					duration: 1,
					level: 'Advanced',
					abstract: 'In this session you will learn the ins and outs of directives',
					upVoteCount: 0
				},	
				{
					name: 'Scopes for fun and profits',
					creatorName: 'John Deo',
					duration: 2,
					level: 'Introductory',
					abstract: 'This session will take a closer look at scopes',
					upVoteCount: 0
				},	
				{
					name: 'Well Behaved Controllers',
					creatorName: 'Jane Doe',
					duration: 4,
					level: 'Intermediate',
					abstract: 'Controllers are the beggining of everything...',
					upVoteCount: 0
				}
			]
		}
	
	};


});