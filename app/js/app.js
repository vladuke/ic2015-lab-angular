'use strict';

/* App Module */

var quotemeApp = angular.module('quotemeApp', [
  'ngRoute',
  'quotemeAppControllers',
  'quotemeAppServices',
]);

quotemeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/me', {
//        templateUrl: 'partials/me.html',
//        controller: 'InitCtrl'
      }).
      when('/me/:myId', {
        templateUrl: 'partials/me.html',
        controller: 'MeCtrl'
      }).
      when('/me/:myId/:planId', {
        templateUrl: 'partials/me.html',
        controller: 'MeCtrl'
      }).
      otherwise({
        redirectTo: '/me'
      });
  }]);

//quotemeApp.directive()
