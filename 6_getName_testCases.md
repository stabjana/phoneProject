# Test cases for getName

## **getName(number)**

The method searches the given number from the registry. If the number is found, returns on object of the owner:

```json
{"firstname":"", "lastname":""}
```

- If no phone with given number is found, method returns null
- If the parameter is missing, null is also returned.

All tests are using the default data

### Test 1: number "12345678"

this returns
```json
{"firstname":"Leila", "lastname":"Hökki"}
```

### Test 2: number "0409812345"

this returns
```json
{"firstname":"Matt", "lastname":"River"}
```

### Test 3: wrong number (non existing) "0000"
returns null

### Test 4: missing parameter
returns null
