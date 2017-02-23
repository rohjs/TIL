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
    if ( !isString(selector) ) { throwError(2); }
    if ( context && !isElement(context) ) { throwError(1); }
    context = context || document;
    return context.querySelectorAll(selector);
}
```

#### query(selector, [contect, index])
`query()` is a simplified and a bit more advanced version of `querySelector()`. With `query()` you can choose the exact element you want to get by passing `index` argument.

```javascript
function query(selector, context, index){
    if ( index && !isNumber(index) ) { throwError(3); }
    index = index || 0;
    return queryAll(selector, context).item(index);
}
```



## 2. Manipulate
After finding the elements, you have to manipulate them. **DOM Manipulation** can be done by _inserting, removing, replacing and duplicating_ elements.

#### append(node, target) (version 1)
`append()` is a simplified version of `appendChild()` method that DOM API provides. It generally appends the node as the last child of the target node.

```javascript
function append(node, target) {
    if ( !isElement(node) || !isElement(target) ) { throwError(1); }
    target.appendChild(node);
    return node;
}
```

#### prepend(node, target) (version 1)
`prepend()` puts the node as the first child of the target. 

```javascript
function prepend(node, target) {
    if ( !isElement(node) || !isElement(target) ) { throwError(1); }
    var first_elm = target.nextElementSibling;
    var parent = target.parentNode;
    if ( first_elm ) {
        parent.insertBefore(node, first_elm);
    } else {
        append(node, parent);
    }
    return node;
}
```

#### before(node, target)
`before()` is a simplified version of `insertBefore()` method. It appends a node before the target node.

```javascript
function before(node, target) {
    if ( !isElement(node) || !isElement(target) ) { throwError(1); }
    target.parentNode.insertBefore(node);
    return node;
}
```

#### after(node, target)
`after()` appends a node after the target node.

```javascript
function after(node, target) {
    if ( !isElement(node) || !isElement(target) ) { throwError(1); }
    var next_elm = target.nextElementSibling;
    var parent = target.parentNode;
    if ( next_elm ) {
        parent.insertBefore(node, next_elm);
    } else {
        append(node, parent);
    }
}
```

#### addPrevious(elem, target)
`addPrevious()` function adds an element before the target. This function is slightly different than `before()` function. First, there is no need to access `parentNode` of the target because it uses `insertAdjacent*()` methods to serve. And second, you can either pass an HTML code or an element for the `elem` argument. Lastly, if you pass a CSS selector for the `target` argument, it will find the very element you want to target.

```javascript
function addPrevious(elem, target) {
    if ( isString(target) ) {
        target = query(target);
    }
    if ( isString(elem) ) {
        target.insertAdjacentHTML('beforebegin', elem);
    } else if ( isElement(elem) ) {
        target.insertAdjacentElement('beforebegin', elem);
    }
    return elem;
}
```

#### addNext(elem, target)
`addNext()` function adds an element next to the target. Since it uses `insertAdjacent*()`, you could either give a string value or an element for both `elem` and `target` arguments.

```javascript
function addNext(elem, target) {
    if ( isString(target) ) {
        target = query(target);
    }
    if ( isString(elem) ) {
        target.insertAdjacentHTML('afterend', elem);
    } else if ( isElement(elem) ) {
        target.insertAdjacentElement('afterend', elem);
    }
    return elem;
}
```

#### remove(node)
`remove()` removes the node. This is a simplified version of `removeChild()` method, but it returns removed node.

```javascript
function remove(node) {
    if ( !isElement(node) ) { throwError(1); }
    node.parentNode.removeChild(node);
    return node;
}
```

#### replace(alt_node, node)
`replace()` is a simplified version of `replaceChild()` method. It replaces `node` with `alt_node` and returns `node`.

```javascript
function replace(alt_node, node) {
    if ( !isElement(alt_node) || !isElement(node) ) { throwError(1); }
    node.parentNode.replaceChild(alt_node, node);
    return node;
}
```

#### exchange(node1, node2)
`exchange()` functions exchanges `node1` and `node2`. This function only works _when arguments are not adjacent to each other._

```javascript
function exchange(node1, node2) {
    if ( !isElement(node1) || !isElement(node2) ) { throwError(1); }
    var next, parent;
    next    = node1.nextElementSibling;
    parent  = node1.parentNode;

    replace(node1, node2);
    if ( next ) {
        before(node2, next);
    } else {
        append(node2, parent);
    }
}
```

#### makeElem(elem, text, [context, method])
`makeElem()` creates an element node with text inside. You can also directly insert the very element you created if you pass `context` or `method` arguments to the `makeElem()` function.

```javascript
function makeElem(elem, text, context, method) {
    if ( !isString(elem) || !isString(text) ) { throwError(2); }
    var elm = document.createElement(elem);
    var txt = document.createTextNode(text);
    elm.appendChild(txt);

    // method: ['append', 'prepend', 'before', 'after']
    method = method || 'append';
    if ( context && isElement(context) ) {
        window[method](elm, context);
    }
    return elm;
}
```