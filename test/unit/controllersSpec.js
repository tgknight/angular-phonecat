'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

    beforeEach(function() {
        this.addMatchers({
            // toEqualData interests only the object properties, ignoring all attached methods
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('phonecatApp'));
    beforeEach(module('phonecatServices'));

    describe('PhoneListCtrl', function() {
        var $scope, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json')
                .respond([{name: "Nexus S"}, {name: "Motorola DRIOD"}]); // trained response for unit test
            $scope = $rootScope.$new();
            $controller('PhoneListCtrl', {"$scope": $scope});
        }));

        // it('should create "phones" model with 3 phones', function() {
        //     expect($scope.phones.length).toBe(3);
        // });

        it('should set the default value of orderProp model to be "age"', function() {
            expect($scope.orderProp).toBe('age');
        });

        it('should create "phones" model with 2 phones fetched from xhr', function() {
            // not fetched yet, thus it should be undefined object
            // expect($scope.phones).toBeUndefined();

            // not fetched yet, this it should be an empty array of phones
            expect($scope.phones).toEqualData([]);

            // flush the request, and return $http promise
            $httpBackend.flush();

            // expect to equal trained response
            expect($scope.phones).toEqualData([{name: "Nexus S"}, {name: "Motorola DRIOD"}]);
        });
    });

    describe('PhoneDetailCtrl', function() {
        var $scope, $httpBackend, expectRespond = {
            name: 'phone xyz',
            images: ['image/url1.png', 'image/url2.png']
        };

        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json')
                .respond(expectRespond);
            $routeParams.phoneId = 'xyz'; // 'phones/' + $routeParams.phoneId + '.json'
            $scope = $rootScope.$new();
            $controller('PhoneDetailCtrl', {"$scope": $scope});
        }));

        it('should fetch phone xyz detail', function() {
            // expect($scope.phone).toBeUndefined();

            // not fetched yet, thus it shold be an empty object of a phone
            expect($scope.phone).toEqualData({});
            $httpBackend.flush();

            expect($scope.phone).toEqualData(expectRespond);
        });
    });
});
