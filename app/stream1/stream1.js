'use strict';

angular.module('myApp.stream1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stream1', {
    templateUrl: 'stream1/stream1.html',
    controller: 'Stream1Ctrl'
  });
}])

//.controller('Stream1Ctrl', ['$scope', 'firebaseArray', function($scope, $firebaseArray) {
//.controller('Stream1Ctrl', ['$scope', function($scope) {
.controller('Stream1Ctrl', ['$scope', 'firebase', function($scope, $firebase) {



	console.log('stream1 Controller Loaded...');
}]);