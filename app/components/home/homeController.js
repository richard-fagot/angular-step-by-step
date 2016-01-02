 window.angular && (function (angular) {

 'use strict';

 angular.module('myapp')
      .controller('HelloController', function($scope) {
       $scope.title = 'World, AngularJS';
    } );

}) (window.angular);