'use strict';

/* Services */
angular.module('phonecatServices', ['ngResource'])
.factory('Phone', ['$resource', function($resource) {
    return $resource('phones/:phoneId.json', {}, {
        query: {method: 'GET', params:{phoneId: 'phones'}, isArray: true}
    });
}]);
