# Test cases for getAllNumbersByType

## **getAllNumbersByType(type)**

Returns an array of objects consisting names and number of given type. If no number is found, an empty array [] is returned. If a person have multiple numbers of given type, each of then will be in it's own object.

If the parameter is missing, throws an exception `'missing parameter'`.

The format of each object in returned array is:

```json
{"firstname":"", "lastname":"", "number":{"type":"", "tel":""}}
```
For example type work:
```json
[
    {"firstname":"Leila", "lastname":"Hökki", "number":{"type":"work", "tel":"987654321"}},
    {"firstname":"Leila", "lastname":"Hökki", "number":{"type":"work", "tel":"05040302"}},
    {"firstname":"Matt", "lastname":"River", "number":{"type":"work", "tel":"2468159"}}
]
```

### Test 1: type: mobile
test uses default data

returns
```json
[{"firstname":"Matt", "lastname":"River", "number":{"type":"mobile", "tel":"0409812345"}}]
```

### Test 2: type: work
test uses default data

returns 

```json
[
    {"firstname":"Leila", "lastname":"Hökki", "number":{"type":"work", "tel":"987654321"}},
    {"firstname":"Leila", "lastname":"Hökki", "number":{"type":"work", "tel":"05040302"}},
    {"firstname":"Matt", "lastname":"River", "number":{"type":"work", "tel":"2468159"}}
]
```

### Test 3: type: x
test uses default data

returns []

### Test 4: missing parameter
call without parameter

throws an exception 'missing parameter'