window.angular && (function (angular) {

 'use strict';

 angular.module('myapp').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'components/home/homeView.html',
        controller: 'HelloController'
      }).when('/signin', {
            templateUrl: 'components/signin/signinView.html',
            controller: 'SigninController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

}) (window.angular);
