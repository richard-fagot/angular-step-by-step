window.angular && (function (angular) {

    'use strict';

    angular.module('myapp')
        .controller('SigninController', function($scope, $http) {
            $scope.user = {};
            $scope.authenticated = false;

            $scope.signin = function() {
                $http.get('http://localhost:8081/auth/'+$scope.user.email)
                .then(function(succ){
                    $scope.authenticated = succ.data.authenticated;
                })
                .catch(function(err) {
                    $scope.authenticated = false;
                });
            }
        } );

}) (window.angular);