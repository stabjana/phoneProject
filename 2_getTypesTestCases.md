# Test cases for the getType

## **getTypes()**

returns all phone types as an array. The type is added to the result array only once. If there are no phones or no persons, an empty array [] is returned. 

### Test 1: getTypes from the default data

create register with defaultData
```js
const register=new PhoneRegister(defaultData);
....register.getTypes()...
```
expect to return:
```json
["home","work","mobile"]
```

### Test 2: No persons

create register with an empty array
```js
const register=new PhoneRegister([]);
```

expect to return [].

### Test 3: persons have no phones

Test data:
```json
[
    {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[]
    },
    {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[]
    }
]
```
Create register with test data.
expect to  return []

### Test 4: Only work numbers

Test data:
```json
[
    {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
            {"type":"work", "number":"987654321"},
            {"type":"work", "number":"05040302"}
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
ecpect to return 
```json
["work"]
```

### Test 5. Testing type is an empty string
Test data:
```json
[
    {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
            {"type":"work", "number":"987654321"},
            {"type":"", "number":"05040302"}
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

expect to return
```json
["work",""]
```

### Test 6. All types are empty strings

Test data:
```json
[
    {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
            {"type":"", "number":"987654321"},
            {"type":"", "number":"05040302"}
        ]
    },
    {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[
            {"type":"", "number":"2468159"}
        ]
    }
]
```
expect to return
```json
[""]
```