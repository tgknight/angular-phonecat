'use strict';

/* Controllers */
angular.module('phonecatControllers', [])
.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('phones/phones.json')
    .then(function(res) {
        $scope.phones = res.data;
    }, function(res) {
        console.err("Error retrieving phones/phones.json: " + res.status);
    });
    $scope.orderProp = 'age';
}])
.controller('PhoneDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
}]);
