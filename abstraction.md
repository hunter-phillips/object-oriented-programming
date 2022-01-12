# Abstraction
- Abstraction is implemented when certain properties and methods cannot be accessed from the outside.

## Private Properties and Methods
```
function Constructor(property) {
    let hiddenProperty = 'value';

    let hiddenMethod = function() { // do something };

    this.property = property;

    this.method = function() { // do something };
}

```
- These hidden methods and properties cannot be accessed by calling from an instance.

## Getters and Setters
```
function Constructor(property) {
    let hiddenProperty = 'value';

    this.getHiddenProperty = function() {
        return hiddenProperty;
    }

    this.setHiddenProperty = function(value) {
        hiddenProperty = value;
    }

    this.property = property;

    this.method = function() { // do something };
}
```
- These getters and setters can be used to manipulate inaccessible variables.


### Object.defineProperty
```
function Constructor(property) {
    let hiddenProperty = 'value';

    Object.defineProperty(this, 'hiddenProperty', {
        get: function() {
            return hiddenProperty;
        },
        set: function(value) {
            hiddenProperty = value;
        }

    });

    this.property = property;

    this.method = function() { // do something };
}
```
- This is an alternative syntax that allows one `obj.hiddenProperty` to be used to set and access a property without creating the two additional getter and setter functions.