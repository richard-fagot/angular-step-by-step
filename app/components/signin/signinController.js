window.angular && (function (angular) {

    'use strict';

    angular.module('myapp')
        .controller('SigninController', function($scope, $http, SigninService, $log) {
            $scope.user = {};
            $scope.user.email = undefined;
            $scope.user.password = undefined;

            $scope.signin = function() {
                SigninService.signin($scope.user.email, $scope.user.password)
                .then(function(response){
                    if(response.authenticated === true) {
                        $log.info('User authentified');
                    } else {
                        
                    }
                })
                .catch(function(err) {
                    $log.info('User not authentified');
                });
            }
        } );

}) (window.angular);