# JavaScript
This document is about the core concept of JavaScript that I've learned by myself.

## Index.  
1. [Data Types](#1-data-types)
2. [Object](#2-object)

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

#### 1. Creating an Object
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
