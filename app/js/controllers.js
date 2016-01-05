'use strict';

/* Controllers */

var quotemeAppControllers = angular.module('quotemeAppControllers', []);

quotemeAppControllers.controller('InitCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.login = function() {
      $location.path("/me/" + $scope.myId);
    }
  }]);

quotemeAppControllers.controller('ApplicantCtrl', ['$scope', '$route', 'Applicant', 'Plan',
  function($scope, $route, Applicant, Plan) {
    $scope.applicant = {};
    $scope.plans = [];
    $scope.createApplicant = function(myId) {
      $scope.applicant.id = myId;
      $scope.applicant = Applicant.save($scope.applicant, function ok() {
        $scope.applicantFound = true;
        $scope.myId = myId;
        $route.reload();
      });
    }
    $scope.createPlan = function(myId) {
      console.log($scope.plan);
      $scope.plan = Plan.save({id: $scope.myId}, $scope.plan, function ok() {
        // $scope.plansFound = true;
        $route.reload();
      });
      $scope.plans.push($scope.plan);
    }
  }]);


quotemeAppControllers.controller('MeCtrl', ['$scope', '$routeParams','Applicant', 'Plan',
  function($scope, $routeParams, Applicant, Plan) {
    if ($routeParams.myId) {
      $scope.myId = $routeParams.myId;
      $scope.applicant = Applicant.get({id: $routeParams.myId},
        function ok() {
          $scope.applicantFound = true;
        },
        function failure() {
          $scope.applicantFound = false;
          console.log("applicant get failure:" + $scope.applicantFound);
        }
      );
      $scope.plans = Plan.query({id: $routeParams.myId},
        function ok() {
        },
        function failure() {
          console.log("plans query failure " + $scope.plansFound);
        }
      );
    }
  }]);

quotemeAppControllers.controller('PlansCtrl', ['$scope', '$routeParams', 'Plan',
  function($scope, $routeParams, Plan) {
    $scope.plans = Plan.query({id: $routeParams.myId});
  }]);

quotemeAppControllers.controller('PremiumCtrl',['$scope', '$routeParams', 'Premium',
  function($scope, $routeParams, Premium) {
    console.log("PremiumCtrl");
    $scope.premiums = Premium.query({planId: $routeParams.planId},
      function success(response) {
        console.log($scope.premiums);
      },
      function failure(response) {
        console.log("failed: " + response)
      }
    );
  }]);
