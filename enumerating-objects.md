# Enumerating Objects

## for...in
```
for (let key in obj) {
    console.log(key) // logs all property and method names
}


for (let key in obj) {
    console.log(obj[key]) // logs all property and method values
}
```

## Object.keys(obj)
```
const keys = Object.keys(obj);
console.log(keys); // logs an array of the keys

```

## in operator
```
if ('key' in obj) {
    // do something
}
```