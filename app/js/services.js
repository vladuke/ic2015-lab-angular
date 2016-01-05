  'use strict';

/* Services */

var quotemeAppServices = angular.module('quotemeAppServices', ['ngResource']);

quotemeAppServices.factory('Applicant', ['$resource',
  function($resource) {
    return $resource('http://localhost:3000/api/applicants/:id', {}, {});
  }]);

quotemeAppServices.factory('Plan', ['$resource',
  function($resource) {
    return $resource('http://localhost:3000/api/applicants/:id/plans', {}, {});
  }]);

quotemeAppServices.factory('Premium', ['$resource',
  function($resource) {
    return $resource('http://localhost:3000/api/plans/:planId/premia', {}, {});
  }]);
