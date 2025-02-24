# get all numbers

return all phone numbers in an array each as object form

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

The phone object in the array is of form:

```json
{ "firstname": "", "lastname": "" }
```

### Test 2: persons with ni phones:

using modified data:

```json
[
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
]
```

expect to give the default data array.

### all phones missing

testdata:

```json
[
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
]
```

returns []

### 4. all persons missing

test data is []
returns []
