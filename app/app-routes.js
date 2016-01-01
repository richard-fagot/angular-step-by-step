window.angular && (function (angular) {

 'use strict';

 angular.module('myapp').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/components/home/homeView.html',
        controller: 'HelloController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

}) (window.angular);
