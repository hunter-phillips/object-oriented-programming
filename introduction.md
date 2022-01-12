## Object Literals
```
const obj = {
    property: value,
    location: { 
        property: value,
        property: value,
    },
    method: function() {
        // do something
    },
};
```

## Factory Functions
```
function createObj(property, propertyN) {
    return {
        property, // equivalent to argument: argument
        propertyN,
        method: function() {
            // do something
        },
    }
}

const obj = createObj(val, valN);
```

## Constructor Function
```
function CreateObj(property, propertyN) {
    this.property = property;
    this.propertyN = propertyN;
    this.method = function () {
        // do something;
    };
}

const obj = new CreateObj(property, propertyN);

equivalent of Object.create({}, proeprty)
```
### Constructor property
`obj.constructor` returns the function that was used to create an object.

### this
- `this` sets the properties of the instance which called upon the function.

### new
- `new` creates an empty object, sets `this` to refer to the new object, and it returns the object from its constructor without a return statement being used.
- When a literal is created, it actually does the following:
    - `let obj = {};` is the same as `let obj = new Object();`
    - `let str = '';` is the same as `let str = new String();`
- Even functions are objects:
    ```
    function FuncName(argument) {
        this.argument = argument;
        this.method = function() {
            // do something
        };
    }

    const FuncName = new Function(arguments, `
        this.argument = argument;
        this.method = function() {
            // do something
        };`
    )
    ```
- When `new` is used, it more specifically does the following:
    ```
    const obj = new CreateObj(property, propertyN);

    // the first argument will be the value of this
    const obj = CreateObj.call({}, property, propertyN); 

    // can be used to pass an array as the second argument
    const obj = CreateObj.apply({}, [property, propertyN]); 
    ```
