/**
 * Created by Andrew on 7/15/2015.
 */
  'use strict';

var app = angular.module('HelpersApp');

app.controller('landingCtrl', function ($scope) {
  $scope.selectTutor = function() {
    $scope.tutor = true;
  };

  $scope.selectTutee = function() {
    $scope.tutor = false;
  };

  $scope.tutor = false;
});

