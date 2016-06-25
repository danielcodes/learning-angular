'use strict';

//still amazes me how eventsApp becomes available
//when services are created, it's just one big ol chain
var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource'])
		.factory('myCache', function($cacheFactory){
			return $cacheFactory('myCache', {capacity: 3});
		});
