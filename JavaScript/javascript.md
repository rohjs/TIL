# JavaScript
This document is about the core concept of JavaScript that I've learned by myself.

## Index.  
1. [Data Types](#1-data-types)
2. [Object](#2-object)
3. [This](#3-this)
4. [Built in Objects and Functions](#4-build-in-objects-and-functions)

## 1. Data Types
JavaScript has mainly two types of data. The **primitive data type**, such as _Number, String, Boolean_, are the types that are passed **by value**. The other type is **reference data type** that includes _Array, Object, Function_. These data types are passed **by reference**, meaning it only copies the pointer address and share the same data altogether.


##### Primitive Data Types
```javascript
var a = 1;
var b = a;
console.log(a == b); // true
```

##### Reference Data Types
```javascript
var a = {
  name: 'jiseung',
  age: 23
};
var b = a;
b = {
  name: 'jiseung roh',
  age: 23
};
console.log(a); // Object { name: 'jiseung roh', age: 23 }
```

## 2. Object
Understanding _Object_ is super important when it comes to JavaScript language. Let's cover the key concept of object step by step.

### 0. A Common Misconception
It is commonly said that _everything in JavaScript is an object,_ but it is definitely not true. Let's get it straight forward before diving deep into the concept of object.  

First, you have to understand **primitive types**, so called **language types.** These types are the basic types that JavaScript language provides as its primitive data.

**Primitive types**
* `String`
* `Number`
* `Boolean`
* `Object`
* `Null`
* `Undefined`

These language types are **not objects.** However when necessary, these types can be converted to **object subtypes**. Object subtypes are _constructed objects_ created by **built-in functions**.

**Built-in Functions**
* `String()`
* `Number()`
* `Boolean()`
* `Object()`
* `Array()`
* `Date()`
* `Error()`

For example,   

### 1. Creating an Object
There are three ways to create an JavaScript Object.
1. `{}`
2. `new Object()`
3. `Object.create()`

The most intuitive and simple way of creating an object is using _literal notation_. You can simply define the keys and values inside the curly braces.

```javascript
var person = {
  name: 'Jiseung',
  age: 23
}
```

The other way is to use _Object constructor function_. By adding `new` keyword in front of the `Object` constructor function, you can make an object. However, using literal notation is more easy and intuitive than using a constructor function.

```javascript
var person = new Object();
person.name = 'Jiseung';
person.age = 23;
```

The last way of creating an object is to use `Object.create()` method. You _must_ pass a value to the method and either **null** or **object type** are only available. The value passed to the method will be set as **prototype** of the very object you are creating.

```javascript
var person = {
  name: 'Jiseung',
  age: 23
}

var jiseung = Object.create(null);
// Object jiseung has no properties. Completely zero properties.
var roh = Object.create(person);
// Object roh doesn't have its own properties.
// but do have properties inherited from its (so called) parent prototype, person.

console.log(roh.name); // 'Jiseung'
console.log(roh.age); // 23
```

### 2. Prototype Object
_Prototype_ is JavaScript's way of inheritance. Prototype enables you to access properties that your object does not possess.  

The most important concept of Prototype is **Prototype Chain**. When you try to calling a property or a method that does not belong to the object you are mentioning, JavaScript automatically tries to find the very field from _Prototype_ of the object. It repeats this process, so called _Prototype chaining_ until it finally meets the field that it was looking for.

```javascript
var jiseung = {}; // empty object
Object.prototype.greet = function() {
  console.log('Hello, this is Jiseung!');
};

jiseung.greet(); // 'Hello, this is Jiseung!'
```

In the above example, the object `jiseung` doesn't have `greet` method. Therefore, it accessed to its _prototype_, which is `Object.prototype` and found `greet()`.

```javascript
var person = { name: 'Jiseung', age: 23 };
var jiseung = Object.create(person);
var boyoon = Object.create(person);
// Both jiseung and boyoon shares person as its prototype.
boyoon.name = 'Boyoon';
// boyoon got its own property 'name'

Object.prototype.greet = function() {
  console.log('Hello, I am ' + this.name + '!' );
};

jiseung.greet(); // 'Hello, I am Jiseung!'
boyoon.greet(); // 'Hello, I am Boyoon!'
```
`this` keyword is referring to the very object you are calling. In the example above, both `jiseung` and `boyoon` objects get access to its prototype `person` and try to execute `greet()` method.  
`boyoon` is able to access `this.name` easily because it contains `name` as its own property. `jiseung`, however, is an empty object so that `this` keyword tries to find the `name` field in the _prototype_ of `jiseung`. Since `person`, which is the prototype of `jiseung` contains `name` property, now it can successfully call `greet()` method without reference error.

You can also intentionally stop or limit the range of prototype chain but this is not recommended.

```javascript
var obj = Object.create(null); // prototype chaining is not available to obj.
obj.speak = function(msg) { console.log(msg); };
obj.nationality = 'Korea';

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype = obj;
// obj became the prototype object of Person().
// Any instance created by Person() constructor can access to properties of obj as its prototype chain.

var jiseung = new Person('jiseung', 23);

console.log(jiseung.name); // jiseung
console.log(jiseung.age); // 23
console.log(jiseung.nationality); // Korea
jiseung.speak('안녕'); // 안녕
console.log(jiseung.hasOwnProperty('name')); // TypeError: hasOwnProperty is not a function.
```

## 3. This

_To be honest, the concept of `this` is still somehow ambiguous to me, so this summary could be changed in the nearest future._

`this` is a property that is created automatically when a function is executed. The keyword `this` refers to **the object that invokes the very function, _not the object that defines the function_**.  
But what makes us _really_ confused is to figure out when exactly _invocation_ happens when we execute functions or methods. [This article](https://rainsoft.io/gentle-explanation-of-this-in-javascript/#2functioninvocation) well explains when the function/method invocation really happens and helped me organize the key principle of `this`.

There are mainly three types of invocation of functions.

1. Function Invocation
2. Method Invocation
3. Constructor Invocation

#### 1) Function Invocation
**Function invocation** simply means executing normal functions with parenthesis and arguments, if necessary.

```javascript
function hello(msg) {
  console.log(msg);
  return this;
}

var bye = function(msg) {
  console.log(msg);
  return this;
}

var a = hello('hello'); // a = Window Object
var b = bye('bye'); // b = Window Object
```

No matter where the function is located, whether it is inside the other function, inside method, etc, if the function is executed purely as the form of function expression, `this` inside the very function will refer to **global object**, in this case, the `Window Object`.

To give you a more clear idea, I made another example.

```javascript
var obj = {
  fruits: {
    apple: true,
    banana: false
  },
  doSomething: {
    eatFruits: function() {
      var innerFunction = function() {
        console.log(this);
      };
      innerFunction();
    }
  }
};

obj.doSomething.eatFruits();
// Window Object
```
Even though `innerFunction` is inside the `obj.doSomething.eatFruits()` method, it is executed as the _function invocation_. This is why the returned value of it is the global object, not `obj.doSomething` nor `obj`.

#### 2) Method Invocation
Method means function stored as a value of an object property. **Method invocation** is performed when an expression in a form of property accessor that evaluates to a function object is followed by parenthesis.

```javascript
var obj = {
  sayHello: function() {
    console.log('Hello');
  },
  sayBye: function() {
    console.log('Bye');
  }
};

obj.sayHello(); // Method Invocation
obj.sayBye(); // Method Invocation
```

When the function expression is called in the form of method, the owner of `this` inside the function is the _actual owner object_ of the very method.

```javascript
var obj = {
  fruits: {
    apple: true,
    banana: false
  },
  doSomething: {
    eatFruits: function() {
      console.log(this);
      // when executed, this follows method invocation rules
      // this === obj.methods
      return this.apple, this.banana;
    }
  }
};

obj.doSomething.eatFruits();
// log obj.doSomething
// Error
```

When you execute `eatFruits()` method, you might get `ReferenceError`. `this` inside the `eatFruits()` method refers to `obj.doSomething`, not 'obj' object. Since `doSomething` doesn't have `apple` or  `banana` as its property, it gets error.  

In order to fix this error:

```javascript
var obj = {
  fruits: {
    apple: true,
    banana: false
  },
  doSomething: {
    eatFruits: function() {
      console.log(this);
      return this.fruits.apple;
    }
  }
};

obj.doSomething.eatFruits.bind(obj)();
// now `this` inside eatFruits() refers to obj object
```

##### Common Mistakes: Separation from its object
When method invocation is passed as a parameter of a function, it loses the connection to its antecedent. It is alike:

```javascript
var event_handlers = {
  mouseClick: function() {
    return this;
  }
};

var button = document.getElementById('btn-submit');
button.addEventListener( "click", event_handlers.mouseClick );
// this === button
// The above code is exactly same as the below

var extractFunction = event_handlers.mouseClick;
button.addEventListener( "click", extractFunction );
```

In this situation, `this` inside the method function no longer refers to its owner object. The object that invokes the very function is now `button`, so `this` now refers to `button` object.  
_Note: HTML Elements are objects._

```javascript
function foo() {
  console.log(this.a);
}
var a = 'You are in global'

var obj = {
  a: 'You are in obj context',
  foo: foo
}
var anotherObj = obj.foo
// It loses implicit binding
// Separation from obj context

obj.foo(); // You are in obj context
anotherObj(); // You are in global
```

#### 3) Constructor Invocation
**Constructor invocation** is performed when a function is used with `new` keyword in front of it. With `new`, function is executed neither in function invocation nor in method invocation, but in constructor invocation. `this` inside the constructor function refers to newly created instance.

```javascript
var Person = function(name, age) {
  this.name = name;
  this.age = age;
};

Person('jiseung', 23);
// Function Invocation (this === Window Object)
// It created a global variable name and age
console.log(name); // 'jiseung'
console.log(age); // 23

var boyoon = new Person('boyoon', 23);
console.log(boyoon.name); // 'boyoon'
console.log(boyoon.age); // 23
```

### 4. Built in Objects and Functions

JavaScript provides many built in objects and functions like any other languages. Let's take a look at some of the basic examples that are commonly used.

1. Time & Intervals
2. Transforming Formats & Values

#### 1. Time & Intervals

* `window.setTimeout(fn, time)`
* `window.setInterval(fn, time)`
* `window.clearInterval(fn)`

##### setTimeout(fn, time)
It allows us to execute a certain function(`fn`) after the time you have set(`time`)

```javascript
// this will be invoked after 2000 milliseconds
window.setTimeout(function() {
  console.log(this);
  console.log('hello');
}, 2000);

// Window Object
// hello
```

##### setInterval(fn, time)
You can repeat executing a function(`fn`) every milliseconds you have set(`time`).

```javascript
window.setInterval(function(){
  console.log('You are awesome, Jiseung!');
}, 2000);

// You are awesome, Jiseung!
// You are awesome, Jiseung!
// You are awesome, Jiseung!
// ... repeats every 2000 seconds
```

In order to stop this `setInterval()` function, we use `clearInterval()`.

```javascript
var fn = function() {
  console.log('hello');
};
var intervals = window.setInterval(fn, 500);

window.setTimeout(function() {
  clearInterval(intervals);
}, 2000);

// The function referenced by 'intervals' will be logging 'hello' every 500 seconds.
// setTimeout function will be fired after 2000 seconds.

// hello    (0)
// hello    (500)
// hello    (1000)
// hello    (1500)
```

```javascript
function generateCounter(num) {
  var counter = num;
  // logCounter will be executed
  // right after executing generateCounter Function,
  // even though you didn't put any parenthesis to the logCounter.
  var logCounter = setInterval(function() {
    console.log(counter--);
  }, 1000);

  setTimeout(function() {
    clearInterval(logCounter);
    }, 1000*num);
}
```

#### Transforming Formats & Values

* `window.parseInt(data, [num_sys])`
* `window.toString(data)`
* `window.toFixed(num)`

##### parseInt(data, [num_sys])
`parseInt()` returns integer value. If you pass an argument specifying number system you want to get, it will transform the format of the number data.

```javascript
var a = 10.6;
var b = 11.9999;
var c = 1039234

a = parseInt(a);
window.parseInt(b);
c = parseInt(c, 16);

console.log('a: ' + a + 'and b: ' + b);
console.log('c: ', c);
// a: 10 and b: 11.999
// c: 17011252  -----  hexadecimal value
```

##### num.toString()

`toString()` is one of the most widely used and useful built in functions provided by JavaScript. It basically returns the value transformed as a string data. But when this function is used with the context of `Object.prototype` and `bind()` method, it can tell us the exact type of the very data you want to examine. This inspection complements the ambiguousity of `typeof` operator.

```javascript
// Basic Usage
var num = 10.5;
var boo = true;

console.log(num.toString());
console.log(boo.toString());
// "10.5"
// "true"
```

```javascript
// Type Inspection
var my_obj = new Object();
var my_arr = new Array();
var my_null = null;
var my_undefined = undefined;

function whatType(data) {
    return Object.prototype.toString.bind(data).slice(8, -1).toLowerCase();
}

console.log(typeof my_obj, whatType(my_obj));
console.log(typeof my_arr, whatType(my_arr));
console.log(typeof my_null, whatType(my_null));
console.log(typeof my_undefined, whatType(my_undefined));

// * Result *
// object, object
// object, array
// object, null
// undefined, undefined
```

##### toFixed(num)

`window.toFixed()` function returns the rounded value of a number data.

```javascript
var a = 10.3;
var b = 10.9999;

console.log(toFixed(a)); // 10
console.log(toFixed(b)); // 11
```


---
**_Below are not yet organized but I am jotting down some examples that could help me understand "this"_**  

**Understanding Call Stack & Call Site**
What’s important is to think about the call-stack (the stack of functions that have been called to get us to the current moment in execution). The call-site we care about is in the invocation before the currently executing function.  
_Cited from **You don't know JS: This & Prototype**_

```javascript
function baz() {
  console.log('baz');
  bar();
  console.log('baz finished execution');
}
function bar() {
  console.log('bar');
  foo();
  console.log('bar finished execution');
}
function foo() {
  console.log('foo');
}

baz();
// * RESULT *
// baz
// bar
// foo
// bar finished execution
// baz finished execution
```

```javascript
function baz() {
  console.log('baz ', this);
  bar();
  console.log('baz finished execution');
}
function bar() {
  console.log('bar ',this );
  obj.foo();
  console.log('bar finished execution');
}
function foo() {
  console.log('foo ', this);
}

var obj = {
  name: 'obj',
  foo: foo
};

baz();
// baz, Window Object
// bar, Window Object
// foo, obj Object { name: 'obj', foo: function(){} }
// bar finished execution
// baz finished execution
```

```javascript
var obj = {
  doFunction: function(fn) {
    fn();
    this.innerFn();
    // this ---> obj
  },
  innerFn: function() {
    console.log("Inner Function");
  }
};
```
##### explicit binding == strong!
```javascript
function foo() {
  console.log(this.a);
}
var a = 3;
var obj = {
  a: 2
};

var bar = function() {
  foo.call(obj);
};

bar(); // 2
bar.call(window); // 2
// bar() manually and forcibly binds obj to foo function (=wrapping)
// It is impossible to bind other objects with bar()
```

##### ES 6, arrow function => inherit lexically
```javascript
// functions
function foo() {
  setTimeout(function() {
    console.log(this.a);
  }, 100);
}
var a = 'global'
var obj = { a: 'obj' };

foo(); // 'global'
foo.call(obj); // 'global'


// arrow functions
function boo() {
  setTimeout( () => {
    console.log(this.a);
  }, 100);
}

boo(); // 'global'
boo.call(obj); // 'obj'
```
##### Closure
```javascript
var generateCounter = function(num) {
  var counter = num;
  return function() {
    console.log(counter--);
  };
};

var a = generateCounter(10);
var b = generateCounter(10);

console.log( a == b );
// returns false

// when executing generateCounter(), it newly creates a functions and returns.
// even though var a and b both seem to have same function literal, they are referencing different functions.
// function == reference
```
##### Built-in Function properties & methods
```javascript
var checkArguments = function(a, b, c) {
  console.log('Expected arguments: ', this.length);
  console.log('Arguments received: ', arguments.length);
};

checkArguments.bind(checkArguments)(1,2,3,4,5,6);
// Expected arguments: 3
// Arguments received: 6
```
---

##### Shallow Duplication of Object
```javascript
// Problem occurs when circular reference happens.
function myFunction() {
  console.log("my function");
}
myObject = {
  a: 2
};
myArray = [ 1, 2, 3 ];

newObject = {
  a: 2,
  b: myFunction,
  c: myObject,
  d: myArray
};

myArray.push(myFunction, newObject);

```

##### Property Descriptor
```javascript
var myObj, yourObj;
myObj   = {};
yourObj = {};

Object.defineProperty(myObj, 'foo', {
  value: [1,2,3],
  writable: false,
  enumerable: false,
  configurable: false  
});

yourObj.boo = myObj.foo; // sharing the same reference object(array)

yourObj.boo.push(4);
console.log(yourObj.boo); // [1,2,3,4]
console.log(myObj.foo); // [1,2,3,4]

myObj.foo.push(5);
console.log(myObj.foo); // [1,2,3,4,5]
console.log(yourObj.boo); // [1,2,3,4,5]

// If an object has a reference to another object
// (i.e. array, object, function, etc.)
// the contents of that object are not affected and remain mutable
```
