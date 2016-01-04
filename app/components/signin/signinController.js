window.angular && (function (angular) {

    'use strict';

    angular.module('myapp')
        .controller('SigninController', function($scope) {
            $scope.user = {};
            $scope.authenticated = false;

            $scope.signin = function() {
            	if($scope.user.email === "toto@ici.com") {
            		$scope.authenticated = true;
            	} else {
            		$scope.authenticated = false;
            	}
            }
        } );

}) (window.angular);