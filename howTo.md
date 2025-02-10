# first we create api

# Phone API

## data

Data will be in json file.  
A person can be in the data array only once.  
Names are unique  
The phone number is also unique  
We assume that the json file is valid and no fields are missing  
Number cant be an empty string my not be nul or undef.  
Type may be an empty string (phone type - home, work and so on)

json file

## class PhoneRegister

### constructor(data)

The data is a json array (from phones.json or from some other source) passed as a parameter.  
If the param is missing, throws an exception `'phone data missing'`.

### get Types

no params, this gets only the types

Returns all phone types as array  
The type is added to the result array only once.  
Should return an empty array if there are no phones or no persons.

for example:

```json
["home", "work", "mobile"]
```

### getPersonsNumbersByType(firstname, lastname, type)

Methods returns an array of phone numbers of given type belonging to given person.

- If no person with given name is found, an empty arr is returned
- if no number with given type is found, an empty arr is returned
- if at least one parameter is missing, an exception `'missing parameter'` is thrown

### getAllNumbersByType(type)

returns an array of obj consisting names and number of given type. If no number is found, an empty array is returned.  
if a person has multiple numbers given type, each of them will be in its own object

if param is missing: an exception `'missing parameter'` is thrown

the format of each obj in the returned arr is:

```json
"firstname": "",
        "lastname": "",
        "phone": [
            {
                "type": "",
                "number": ""
            },
            {
                "type": "",
                "number": ""
            },
            {
                "type": "",
                "number": ""
            }
        ]
```

for example type work:

```json

```

### getAllNumbers()

Return all phone numbers in an array, each as an object of form:
