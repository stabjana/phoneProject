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
        const expectedResult = ["987654321", "12312312"];
        expect(register.getPersonsNumbersByType('Leila', 'Hökkanen', 'work')).toEqual(expectedResult);
    });

    test('Test 2: Matti River and mobile', () => {
        const register = new PhoneRegister(defaultData);
        const expectedResult = ["24681591"];
        expect(register.getPersonsNumbersByType('Matti', 'Riverlainen', 'mobile')).toEqual(expectedResult);
    });


    describe('Test 1-3', () => {
        const testValues = [
            // fn       ln      type        result
            ['Leila', 'Hökkanen', 'work', ["987654321", "12312312"]],
            ['Matti', 'Riverlainen', 'mobile', ["24681591"]],
            ['Matti', 'x', 'mobile', []],
            ['x', 'Riverlainen', 'mobile', []],
            ['Matti', 'Riverlainen', 'x', []]
        ];
        const register = new PhoneRegister(defaultData);

        test.each(testValues)('%s, %s, %s returns %s', (fn, ln, type, result) => {
            expect(register.getPersonsNumbersByType(fn, ln, type)).toEqual(result);
        });
    })// end of describe of test 1-3

    describe('Test 4: params are missing', () => {
        const register = new PhoneRegister(defaultData);

        test('4.1: one param missing (type)', () => {
            expect(() => register.getPersonsNumbersByType('Matti', 'Riverlainen')).toThrow('missing parameter');
        });
        test('4.2: two params missing (type)', () => {
            expect(() => register.getPersonsNumbersByType('Matti')).toThrow('missing parameter');
        });
        test('4.3: all params missing (type)', () => {
            expect(() => register.getPersonsNumbersByType()).toThrow('missing parameter');
        });
    }); // end of desc. test4

    test('Test 5: testing empty string as type', () => {
        const testData = [
            {
                "firstname": "Leila",
                "lastname": "Hökkanen",
                "phones": [
                    { "type": "work", "number": "987654321" },
                    { "type": "", "number": "12312312" },
                    { "type": "home", "number": "12345678" }
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
        expect(register.getPersonsNumbersByType('Leila', 'Hökkanen', ''))
            .toEqual(["12312312"])

    })// end of test 5

}); // end of Testing getPersonsNumbersByType

describe('Testing getAllNumbersByType', () => {

    test('Test 1: type: mobile', () => {
        const register = new PhoneRegister(defaultData);

        const expectedResult = [
            {
                "firstname": "Matti",
                "lastname": "Riverlainen",
                "number": { "type": "mobile", "tel": "24681591" }
            }
        ];

        expect(register.getAllNumbersByType('mobile'))
            .toEqual(expectedResult);
    });

    test('Test 2: type: work', () => {
        const register = new PhoneRegister(defaultData);

        const expectedResult = [
            {
                "firstname": "Leila", "lastname": "Hökkanen",
                "number": { "type": "work", "tel": "987654321" }
            },
            {
                "firstname": "Leila", "lastname": "Hökkanen",
                "number": { "type": "work", "tel": "12312312" }
            },
            {
                "firstname": "Matti", "lastname": "Riverlainen",
                "number": { "type": "work", "tel": "56789102" }
            }
        ];

        expect(register.getAllNumbersByType('work')).toEqual(expectedResult);
    });

    test('Test 3: type: x', () => {
        const register = new PhoneRegister(defaultData);
        expect(register.getAllNumbersByType('x')).toEqual([]);
    });

    test('Test 4: missing parameter', () => {
        const register = new PhoneRegister(defaultData);
        expect(() => register.getAllNumbersByType()).toThrow('missing parameter');
    });
}) //end of Testing getAllNumbersByType

describe('Testing getName', () => {
    const register = new PhoneRegister(defaultData);

    const testValues = [
        //number       result
        ["12345678", { "firstname": "Leila", "lastname": "Hökkanen" }],
        ["24681591", { "firstname": "Matti", "lastname": "Riverlainen" }]
    ];

    test.each(testValues)('number %s returns %p', (number, result) => {
        expect(register.getName(number)).toEqual(result);
    });

    test('Test 3: wrong number (non existing) "0000"', () => {
        expect(register.getName('0000')).toBeNull();
    });

    test('Test 4: missing parameter', () => {
        expect(register.getName()).toBeNull();
    });
})
// end of get Name

describe('Testing getAllNumbers', () => {
    test('Test 1: Testing with default data', () => {
        const register = new PhoneRegister(defaultData);
        expect(register.getAllNumbers()).toEqual(defaultData);
    });

    test('TEst 2: persons with no phones', () => {
        const testData = [
            {
                "firstname": "Mary",
                "lastname": "Jones",
                "phones": []
            },
            {
                "firstname": "Leila",
                "lastname": "Hökkanen",
                "phones": [
                    {
                        "type": "home",
                        "number": "12345678"
                    },
                    {
                        "type": "work",
                        "number": "987654321"
                    },
                    {
                        "type": "work",
                        "number": "12312312"
                    }
                ]
            },
            {
                "firstname": "Amanda",
                "lastname": "Brown",
                "phones": []
            },
            {
                "firstname": "Matti",
                "lastname": "Riverlainen",
                "phones": [
                    {
                        "type": "home",
                        "number": "22785678"
                    },
                    {
                        "type": "mobile",
                        "number": "24681591"
                    },
                    {
                        "type": "work",
                        "number": "56789102"
                    }
                ]
            },
            {
                "firstname": "Vera",
                "lastname": "River",
                "phones": []
            }
        ];
        const register = new PhoneRegister(testData);
        expect(register.getAllNumbers()).toEqual(defaultData);
    });

    test('Test 3: All phones missing', () => {
        const testData = [
            {
                "firstname": "Mary",
                "lastname": "Jones",
                "phones": []
            },
            {
                "firstname": "Leila",
                "lastname": "Hökkanen",
                "phones": []
            }
        ];

        const register = new PhoneRegister(testData);
        expect(register.getAllNumbers()).toEqual([]);
    });

    test('Test 4: All persons missing', () => {
        const register = new PhoneRegister([]);
        expect(register.getAllNumbers()).toEqual([]);

    });
});