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

quotemeApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

//quotemeApp.directive()
