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
    $scope.name = 'world';
    $scope.cars = [
        {make: 'Skoda', model: 'Fabia'},
        {make: 'bmw', model: '320d'},
        {make: 'Ford', model: 'T'}
    ];
    $scope.doBoo = function() {
      console.log("Boo!");
      alert("Boo!");
    };
  });
