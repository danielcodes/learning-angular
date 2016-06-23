'use strict';

eventsApp.filter('durations', function(){
	//the property from the object is passed to this func
	return function(duration){
		switch(duration){
			case 1:
				return "Half Hour";	
			case 2:
				return "1 Hour";	
			case 3:
				return "Half Day";	
			case 4:
				return "Full Day";	
		}	
	};
});

eventsApp.filter('levels', function(){
	return function(level){
		
		var icon = '<i class="icon-play"></i>';

		switch(level){
			case 'Introductory':
				return icon;
			case 'Intermediate':
				return icon + icon;
			case 'Advanced':
				return icon + icon + icon;
		}

	}
});
