### **constructor(data)**

The data is an json array (from phones.json or from some other source) passed as a parameter.
If the parameter is missing, throws an exception `'phone data missing'`.

### Test 1: missing parameter throw an exception

```js
new PhoneRegister();
```

expect:

this will throw an exception: `'phone data missing'`
