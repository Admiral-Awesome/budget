'use strict';

var app = angular.module('app', ['ngRoute', 'ui.bootstrap'])
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/main.html',
      controller: 'mainCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }])

app.controller('mainCtrl', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {
  $scope.test = "tests";
}])
