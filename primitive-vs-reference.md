# Primitive vs Reference
## Primitive
```
let x = 10;
let y = x;

x = 20;

console.log(x); // logs 20
console.log(y); // logs 10
```
- Primitives store values and therefore only pass their value to other variables.

```
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number); // logs 10
```
- The value 10 is passed to the function, so the original `number` variable is never altered.

## Reference (Objects)
```
let x = { value: 10 };
let y = x;

x.value = 20;

console.log(x.value); // logs {value: 20}
console.log(y.value); // logs {value: 20}
```
- Reference types (objects) store memory locations, and they pass that reference to other variables.

```
let obj = { value: 10 };

function increase(obj) {
    obj++;
}

increase(obj);
console.log(obj); // logs {value: 11}
```
- The object reference is passed to `increase`, resulting in the object's actual value being increased.