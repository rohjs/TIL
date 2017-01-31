# JavaScript
This document is about the core concept of JavaScript that I've learned by myself.

## Index.  
1. [Data Types](#1-data-types)
2. [Basic structure](#2-basic-structure)
3. [Accessing data in Vue instance](#3-accessing-data-in-vue-instance)
4. [Understanding directives](#4-understanding-directives)
5. [Other properties](#5-other-properties)

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
