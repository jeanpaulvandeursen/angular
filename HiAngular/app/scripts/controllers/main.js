'use strict';

/**
 * @ngdoc function
 * @name hiAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hiAngularApp
 */
angular.module('hiAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
