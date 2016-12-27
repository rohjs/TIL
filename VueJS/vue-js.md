# VueJS
I am learning VueJS via [Udemy Course](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview). And I am going to write some of the concepts I learned day by day.
## Index.  
1. [Kickstart VueJS](## 1. Kickstart VueJS)



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

