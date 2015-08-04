'use strict';

/* Controllers */
angular.module('phonecatControllers', [])
// .controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
//     $http.get('phones/phones.json')
//     .then(function(res) {
//         $scope.phones = res.data; // list of all phones, thus phone's'
//     }, function(res) {
//         console.err("Error retrieving phones/phones.json: " + res.status);
//     });
//     $scope.orderProp = 'age';
// }])
// .controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
//     $http.get('phones/' + $routeParams.phoneId + '.json')
//     .then(function(res){
//         $scope.phone = res.data; // data of only one phone (phoneId), thus phone (no 's')
//         $scope.mainImageUrl = res.data.images[0];
//     }, function(res) {
//         console.err("Error retrieving phones/" + $routeParams.phoneId + ".json: " + res.status);
//     });
//
//     $scope.setImage = function(imageUrl) {
//         $scope.mainImageUrl = imageUrl;
//     };
// }]);
.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
}])
.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}])
