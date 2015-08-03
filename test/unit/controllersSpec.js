'use strict';

/* jasmine specs for controllers go here */

describe('PhoneListCtrl', function() {
    var $scope;
    beforeEach(module('phonecatApp'));
    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('PhoneListCtrl', {"$scope": $scope});
    }));

    it('should create "phones" model with 3 phones', function() {
        expect($scope.phones.length).toBe(3);
    });
});
