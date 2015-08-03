'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

    beforeEach(module('phonecatApp'));

    describe('PhoneListCtrl', function() {
        var $scope;

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('PhoneListCtrl', {"$scope": $scope});
        }));

        it('should create "phones" model with 3 phones', function() {
            expect($scope.phones.length).toBe(3);
        });

        it('should set the default value of orderProp model to be "age"', function() {
            expect($scope.orderProp).toBe('age');
        })
    });
});
