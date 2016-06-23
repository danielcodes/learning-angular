'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = function(email) {

					//moved to a service, obj with a method
					return gravatarUrlBuilder.buildGravatarUrl(email);
        };
    }
);



