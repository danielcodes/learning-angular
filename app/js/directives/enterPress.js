'use strict';

//when enter is pressed, activate the click
eventsApp.directive('enterPress', function($timeout){
	return {
		link: function(scope, element, attrs) {

			element.bind("keydown keypress", function (event) {
				if(event.which === 13) {

					console.log('enter has been presse');
					console.log(element);
					element[0].submit()
				}
			});

		}
	};
});


