# JavaScript
This document is about the core concept of JavaScript that I've learned by myself.

## Index.  
1. [Data Types](#1-data-types)
2. [Object](#2-object)
3. [This](#3-this)

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

### 2. Prototype
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

### 3. This

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
      return this.apple, this.banana;
    }
  }
};

obj.doSomething.eatFruits.bind(obj);
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
