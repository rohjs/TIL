# VueJS
I am learning VueJS via [Udemy Course](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview). And I am going to write some of the concepts I learned day by day.
## Index.  
1. [Kickstart VueJS](## 1. Kickstart VueJS)
2. [Basic structure](## 2. Basic structure)
3. [Accessing data in Vue instance](## 3. Accessing data in Vue instance)
4. [Understanding directives](## 4. Understanding directives)

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
Directives are like *instructions*. We tell VueJS to do certain jobs with directives. VueJS provides a few built-in directives which cover a lot of features, but we can also make our own directives.

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

![v-bind](https://cloud.githubusercontent.com/assets/19285811/21534550/3cff9580-cdac-11e6-9cbd-6308f206828c.jpg)

In order to bind data where we can't use interpolation, you should use `v-bind` directive. After `v-bind:`, you need to give the name of HTML attributes as an _argument_ and the _data_.

#### Example

```html
<div id="app">
  <p>My portfolio site: <a v-bind:href="link"></a></p>
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    link: 'https://rohjs.github.io/portfolio'
  }
});
```

### 3. v-on

![v-on](https://cloud.githubusercontent.com/assets/19285811/21540184/ec274eec-cdf0-11e6-9e3b-c6014a3223e3.jpg)  

`v-on` detects events and bind event handlers to certain events. You can use _every DOM events_ as an argument for `v-on` directive and pass event handler. The event handler function should be stored in Vue instance(_methods).

_* The only problem is that I don't know the DOM events well. [This](https://www.bitovi.com/blog/a-crash-course-in-how-dom-events-work) is a useful link to understand DOM events. Next time I should add TIL contents about it too._

#### Example 1: Increase counter number

```html
<div id="app">
  <button v-on:click="increaseCounter">Increase Counter</button>
  <p>{{ counter }}</p>
</div>
```
```javascript
new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    increaseCounter: function() {
      this.counter++; 
    }
  }
});
```

#### Example 2: Dynamically load input data

```html
<div id="app" v-on:input="changeTitle">
  <input type="text">
  <h1>{{ title }}</h1>
</div>
```
```javascript
new Vue({
  el: '#app',
  data: {
    title: 'Hello VueJS'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  }
});
```
In the second example, when you look at the `changeTitle` method, you can see a `event` parameter. When DOM event occurs, DOM automatically creates an *Event Object* and it can be passed to the event handlers as an argument. This, therefore, is also available in VueJS as it is a default behavior of DOM API. In the _event object_, data related to the very event are stored and you can access it inside an event handler.

#### Example 3: Dynamically load the position of the event

```html
<div id="app">
  <p v-on:mousemove="updateCoordinates">Coordinate: {{ x }}, {{ y }}</p>
</div>
```
```javascript
new Vue({
  el: '#app',
  data: {
    x: 0,
    y: 0
    // Setting an initial value of x and y properties
  },
  methods: {
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
      // Vue instance automatically re-renders the page when properties of data change
    }
  }
});
```

#### Event Modifiers

VueJS provides _*modifiers*_, too. By using modifiers, you can do `stopPropagation()` and `preventDefault()`.

```html
<div id="app">
  <p v-on:mousemove="update">Coordinates: {{ x }}, {{ y }} <span v-on:mousemove.stop="update">DEAD ZONE</span></p>
</div>
```

* `.stop`
* `.prevent`
* `.capture`
* `.self`
* `.once`







