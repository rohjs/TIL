# VueJS
I am learning VueJS via [Udemy Course](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview). And I am going to write some of the concepts I learned day by day.
## Index.  
1. [Kickstart VueJS](## 1. Kickstart VueJS)
2. [Basic structure](## 2. Basic structure)
3. [Accessing data in Vue instance](## 3. Accessing data in Vue instance)
4.

## 1. Kickstart VueJS

#### Basic Example Code

```html
<head>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="app.js"></script>
</head>
<body>
  <div id="app">
    <p>{{ title }}</p>
    <p>{{ sayHello() }}</p>
  </div>
</body>
```
The above code is HTML template of a Vue instance that I am going to create below.


```javascript
new Vue({
  el: "#app",
  data: {
    title: 'Hello VueJS'
  },
  methods: {
    sayHello: function() {
      return 'Hello!';
    }
  }
});
```
The JavaScript code in `app.js` will then create a Vue instance. There is no need to store the instance in a variable or whatsoever. You just need to make a new Vue instance by "new Vue()".  


The basic idea of VueJS is like this:  
1. You create a HTML file.  
2. A Vue instance is then created based on the HTML file you made. (It is not parsed in DOM yet.)  
3. Vue instance does all the magical works and outputs *an HTML template* that renders document object model that we could see via browsers.

So far so easy, right? Let's move on to the next level.



## 2. Basic structure

* el: _String,_ Tells Vue what element in the HTML file will be affected to the Vue instance that I am creating.
* data: _Object,_ Data that is used in HTML template || inside the Vue instance
* methods: _Object,_ Methods that is used in HTML template || inside the Vue instance



## 3. Accessing data in Vue instance

Accessing data is said to be extremely important and also difficult (as far as I've heard of). But VueJS makes it super intuitive, super simple and super easy.

#### Example

```javascript
new Vue({
  el: '#app',
  data: {
    title: 'Hello VueJS',
    name: 'Jiseung Roh'
  },
  methods: {
    sayHello: function() {
      return this.name;
    }
  }
});
```

#### Analysis
1. You don't need to use extra keywords to access to the data/methods object in the instance.  
VueJS makes it easy to retrieve and change the value in data and methods object. The instructor tells that VueJS _proxies_ something blah blah blah but since I don't know what _[proxy](http://www.dofactory.com/javascript/proxy-design-pattern)_ means exactly, I decided to move on for now.  
Anyways in order to retrieve a data from data property in HTML, you need to use _string interpolation_ like this: `{{ name_of_the_property }}`. You cannot use interpolation in HTML attributes and I will cover this later.  

2. You can access to the data property by using `this` in the methods you are defining.
You can freely get the data/methods properties in common situation. However, when you try to access them in the middle of writing a method, you have to put `this` in front of the data that you want to call. `this`, in this case, refers to `data` property.  
So as you can see in the above example, `sayHello()` method is accessing the `data.name` by `this.name`.



## 4. Understanding directives
Directives are like instructions. We tell VueJS to do certain jobs with directives. VueJS provides a few built-in directives which cover a lot of features, but we can also make our own directives.

### 1. v-html
`v-html` is a directive that enables Vue instance to render raw HTML code. When we retrieve data from the instance, we normally use `{{ String Interpolation }}`. However, when rendering this, VueJS escapes HTML element which means they render data in text format.

#### Example

```html
<div id="app">
  <p>{{ link }}</p>
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    link: "<a href='http://rohjs.github.io/portfolio'>Jiseung's Portfolio</a>"
  }
});
```
When we execute the above code, the brower will render `<a href="http://rohjs.github.io/portfolio">Jiseung's Portfolio</a>` as a plain text. This evidently shows how VueJS deals with the data by default.  
Therefore if you want to output a raw html code, you should use `v-html` directive instead.
```html
<div id="app">
  <p v-html:"link"></p>
</div>
```
Then the anchor element will be located inside the `<p>` element.

### 2. v-bind
`v-bind` tells VueJS to bind something—arguments passed by the directive— with data stored in Vue instance. As you cannot render a raw HTML code in the interpolation, it is also impossible to use the expression code to pass data to HTML attributes.







