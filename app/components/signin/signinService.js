window.angular && (function (angular) {

    'use strict';

    angular.module('myapp')
        .factory('SigninService', function($http, $q) {
            var Signin = {}

            Signin.authenticated = false;

            Signin.signin = function(email, password) {
                var deffered = $q.defer();

                $http.get('http://localhost:8081/auth/' + email)
                .then(function(response){
                    if(response.data.authenticated === true) {
                        Signin.authenticated = true;
                        deffered.resolve(Signin);
                    } else {
                        Signin.authenticated = false;
                        deffered.reject('Bad login or password');
                    }
                })
                .catch(function(response) {
                    Signin.authenticated = false;
                    deffered.reject('Bad login or password');
                });

                return deffered.promise;
            }

            return Signin;
        } );

}) (window.angular);