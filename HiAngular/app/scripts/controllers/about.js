'use strict';

/**
 * @ngdoc function
 * @name hiAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hiAngularApp
 */
angular.module('hiAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
