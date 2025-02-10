'use strict';

const PhoneRegister = require('../phoneRegister');
const defaultData = require('../phones.json');

describe('Testing constructor', () => {
    test('Test 1: missing parameter throw an exception', () => {
        expect(() => new PhoneRegister())
            .toThrow('phone data missing');
    });
});

describe('Testing getTypes', () => {
    test('Test 1: getTypes from the default data', () => {
        const register = new PhoneRegister(defaultData);
        expect(register.getTypes()).toEqual(["home", "work", "mobile"]);
    });

    test('Test 1: getTypes from the default data v2', () => {
        const register = new PhoneRegister(defaultData);
        const expectedResult = ["home", "work", "mobile"];

        expect(register.getTypes()).toEqual(expectedResult);
    });

    test('Test 2: No persons', () => {
        const register = new PhoneRegister([]);
        expect(register.getTypes()).toEqual([]);
    });

    test('Test 3: persons have no phones', () => {
        const testData = [
            {
                "firstname": "Leila",
                "lastname": "Hökkanen",
                "phones": []
            },
            {
                "firstname": "Matti",
                "lastname": "Riverlainen",
                "phones": []
            }
        ];
        const register = new PhoneRegister(testData);
        expect(register.getTypes()).toEqual([]);
    });

    test('Test 4: Only work numbers', () => {
        const testData = [
            {
                "firstname": "Leila",
                "lastname": "Hökkanen",
                "phones": [
                    { "type": "work", "number": "987654321" },
                    { "type": "work", "number": "12312312" }
                ]
            },
            {
                "firstname": "Matti",
                "lastname": "Riverlainen",
                "phones": [
                    { "type": "work", "number": "56789102" }
                ]
            }
        ];
        const register = new PhoneRegister(testData);
        expect(register.getTypes()).toEqual(["work"]);
    });

    test('Test 5. Testing type is an empty string', () => {
        const testData = [
            {
                "firstname": "Leila",
                "lastname": "Hökkanen",
                "phones": [
                    { "type": "work", "number": "987654321" },
                    { "type": "", "number": "12312312" }
                ]
            },
            {
                "firstname": "Matti",
                "lastname": "Riverlainen",
                "phones": [
                    { "type": "work", "number": "56789102" }
                ]
            }
        ];
        const register = new PhoneRegister(testData);
        expect(register.getTypes()).toEqual(["work", ""]);
    });

    test('Test 6. All types are empty strings', () => {
        const testData = [
            {
                "firstname": "Leila",
                "lastname": "Hökkanen",
                "phones": [
                    { "type": "", "number": "987654321" },
                    { "type": "", "number": "12312312" }
                ]
            },
            {
                "firstname": "Matti",
                "lastname": "Riverlainen",
                "phones": [
                    { "type": "", "number": "56789102" }
                ]
            }
        ];
        const register = new PhoneRegister(testData);
        expect(register.getTypes()).toEqual([""]);
    });

});

describe('Testing getPersonsNumbersByType', () => {
    test('Test 1: Leila Hökkanen and work', () => {
        const register = new PhoneRegister(defaultData);
        const expectedResult = [987654321, 12312312];
        expect(register.getPersonsNumbersByType('Leila', 'Hökkanen', 'work')).toEqual(expectedResult);
    });

    test('Test 2: Matti River and mobile', () => {
        const register = new PhoneRegister(defaultData);
        const expectedResult = [24681591];
        expect(register.getPersonsNumbersByType('Matti', 'Riverlainen', 'mobile')).toEqual(expectedResult);
    });
}); // ein ende zu viel hier?

describe('Test 1-3', () => {
    const testValues = [
        ['Leila', 'Hökkanen', 'Worker', [987654321, 12312312]],
        ['Matti', 'Riverlainen', 'mobile', [24681591]],
        ['Matti', 'x', 'mobile', []],
        ['x', 'Riverlainen', 'mobile', []],
        ['Matti', 'Riverlainen', 'x', []]
    ];
    const register = new PhoneRegister(defaultData);

    test.each(testValues)('%s, %s, %s returns %s', (fn, ln, type, result) => {
        expect(register.getPersonsNumbersByType(fn, ln, type)).toEqual(result);
    });
})