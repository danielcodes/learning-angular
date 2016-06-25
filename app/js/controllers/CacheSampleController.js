'use strict';

eventsApp.controller('CacheSampleController',
	//this controller is gonna use the myCache service defined in app.js
	function CacheSampleController($scope, myCache){

		//myCache becomes available, and it has a bunch of methods we don't know, coll
		$scope.addToCache = function(key, value){
			myCache.put(key, value);	
		};

		$scope.readFromCache = function(key){
			return myCache.get(key);	
		};

		$scope.getCacheStats = function(){
			return myCache.info();	
		};
	
	}
);


