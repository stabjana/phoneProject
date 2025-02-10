# Test cases for getPersonsNumbersByType

## **getPersonsNumbersByType(firstname,lastname, type)**

Methos returns an array of phone numbers of given type belonging to given person.

For example from default data Leila Hökki and work returns:
```json
["987654321","05040302"]
```

and Matt River and mobile returns
```json
["0409812345"]
```

-   If no person with given name is found, an empty array [] is returned
-   If no number with given type is found, an empty array [] is returned
-   If at least one parameter is missing, an exception `'missing parameter'` is thrown.

### Test 1: Leila Hökki and work
Test uses default data

```js
const register=new PhoneRegister(defaultData);
const result=register.getPersonsNumbersByType('Leila','Hökki','work');
```

expect the method to return
```json
["987654321","05040302"]
```

### Test 2: Matt River and mobile

expect the method to return
```json
["0409812345"]
```

### Test 3: Wrong name or type
Test with default data

Test with values:

#### 3.1 fistname Matt, lastname x, type mobile
#### 3.2 fistname x, lastname River, type mobile
#### 3.3 fistname Matt, lastname River, type x

returns []

### Test 4: parameter missing
Test uses default data

#### 4.1: One parameter missing (type)
call with 'Matt' and 'River'

#### 4.2: Two parameters are missing (type and lastname)
call with 'Matt'

#### 4.3: All parameters are missing

expect to throw an exception `'missing parameter'`


### Test 5: testing empty string as type

Use modified data:

Test data:
```json
[
    {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
            {"type":"work", "number":"987654321"},
            {"type":"", "number":"05040302"},
            {"type":"home", "number":"12345678"}
        ]
    },
    {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[
            {"type":"work", "number":"2468159"}
        ]
    }
]
```
with parameters 'Leila', 'Hökki' and ""

returns
```json
["05040302"]
```