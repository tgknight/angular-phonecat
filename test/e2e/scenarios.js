'use strict';

/* http://docs.angularjs.org/guide/e2e-testing */

describe('PhoneCat App', function() {

    describe('Phone list view', function() {
        beforeEach(function() {
            browser.get('app/index.html');
        });

        it('should filter the phone list as a user types into the search box', function() {
            var phoneList = element.all(by.repeater('phone in phones'));
            var query = element(by.model('query'));

            expect(phoneList.count()).toBe(3);

            query.sendKeys('nexus');
            expect(phoneList.count()).toBe(1);
            query.clear();

            query.sendKeys('motorola');
            expect(phoneList.count()).toBe(2);
        });

        it('should be possible to control phone order via the drop down select box', function() {
            var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
            var query = element(by.model('query'));

            function getNames() {
                return phoneNameColumn.map(function(elm) {
                    return elm.getText();
                });
            }

            // take note of the order in the expected array
            // orderProp = age (by default)
            query.sendKeys('tablet');
            expect(getNames()).toEqual(["Motorola XOOM\u2122 with Wi-Fi", "MOTOROLA XOOM\u2122"]);

            // orderProp = name
            element(by.model('orderProp')).element(by.css('option[value="name"]')).click();
            expect(getNames()).toEqual(["MOTOROLA XOOM\u2122", "Motorola XOOM\u2122 with Wi-Fi"]);
        });
    });

});
