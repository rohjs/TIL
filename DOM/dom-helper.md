# DOM Helper Functions
This document is a list of DOM helper functions that enables us to script DOM more efficiently.

## Index.
0. [Helpers](#0-helpers)
    * `throwError`
    * `whatType`
    * `isType`
    * `isString`
    * `isNumber`
    * `whatNode`
    * `isElement`
    * `makeArray`
1. [Traverse](#1-traversing)
    * `queryAll`
    * `query`
2. [Manipulate](#2-manipulate)
    * `append`
    * `prepend`
    * `before`
    * `after`
    * `addPrevious`
    * `addNext`
    * `remove`
    * `replace`
    * `exchange`
    * `makeElem`

## 0. Helpers
Before we jump right into making DOM helper functions, let's make some of good functions that could help us easily create DOM helpers.

#### throwError(code)
`throwError()` creates error message when error occurs.
```javascript
// Code could be added if necessary.
function throwError(code) {
    var msg;
    // Categorize Errors
    switch (code) {
        case 1:
            msg = 'ELEMENT_NODE';
            break;
        case 2:
            msg = 'String data';
            break;
        case 3:
            msg = 'Number data';
        default:
            msg = 'custom';
    }
    // Throw error message
    if ( typeof code === 'number' ) {
        throw new Error( msg + ' is required.' );
    } else {
        throw new Error(code);
    }
}
```

#### whatType(data)
`whatType()` returns _the type of the data_ passed to the function. This makes up some vagueness of `typeof` operator.

```javascript
function whatType(data) {
    return Object.prototype.toString.call(data).toLowerCase();
}

/* Usage */
whatType('string'); // string
whatType(5); // number
whatType([1,2,3]); // array
```

#### isType(data, check)
`isType()` returns _a boolean data_, telling whether the data is the type you want to check.

```javascript
function isType(data, check) {
    if ( whatType(check) !== 'string' ) { throwError(3); }
    return whatType(data) === check.toLowerCase();
}

/* Usage */
isType('hello', 'string'); // true
isType(100, 'object'); // false
```

#### isString(data)
`isString()` returns _a boolean data_, telling whether the data is a string data.

```javascript
function isString(data) {
    return isType(data, 'string');
}
```

#### isNumber(data)
`isNumber()` returns _a boolean data_, telling whether the data is a number data.

```javascript
function isNumber(data) {
    return isType(data, 'number');
}
```

#### whatNode(node)
`whatNode()` returns _a node value_ of the node you want to check.

```javascript
function whatNode(node) {
    return node.nodeValue;
}
```

#### isElement(node)
`isElement()` returns _a boolean data_, telling whether the data is an element node.

```javascript
function isElement(node) {
    return whatNode(node) === 1;
}
```


#### makeArray(fake_array)
`makeArray()` _turns an array-like list into an array data._ This function is particularly useful when you want to use built-in properties and methods that _array_ provides with array-like lists such as _nodeList_.

```javascript
function makeArray(fake_array) {
    // Cross Browsing
    if ( Array.from ) {
        return Array.from(fake_array);
    } else {
        return Array.prototype.slice.call(fake_array);
    }
}
```

##### Testing

```javascript
var node_list = document.querySelectorAll('li');
var real_list = makeArray(node_list);

console.log( node_list instanceof Array ); // false
console.log( real_list instanceof Array ); // true
```


## 1. Traverse
**DOM Traversing** is the very first step of dynamically manipulate HTML elements parsed as node objects. You should be able to select the very element before executing manipulation.  

#### queryAll(selector, [context])
`queryAll()` is a minified version of `querySelectorAll(selector)`.

```javascript
function queryAll(selector, context) {
    if ( isString(selector) ) { throwError(2); }
    if ( context && isElement(context) ) { throwError(1); }
    context = context || document;
    return context.querySelectorAll(selector);
}
```

#### query(selector, [contect, index])
`query()` is a simplified and a bit more advanced version of `querySelector()`. With `query()` you can choose the exact element you want to get by passing `index` argument.

```javascript
function query(selector, context, index){
    if ( index && isNumber(index) ) { throwError(3); }
    index = index || 0;
    return queryAll(selector, context).item(index);
}
```