'use strict';

/* App Module */
angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
    })
    .when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
    })
    .otherwise({
        redirectTo: '/phones'
    });
}]);
