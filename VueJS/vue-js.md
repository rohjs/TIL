# VueJS
I am learning VueJS via [Udemy Course](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview). And I am going to write some of the concepts I learned day by day.
## Index.  
1. [Kickstart VueJS][kickstart]
2. [Basic structure](## 2. Basic structure)
3. [Accessing data in Vue instance](## 3. Accessing data in Vue instance)
4. [Understanding directives](## 4. Understanding directives)
5. [Other properties](## 5. Other properties)

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
* computed: _Object,_ Dependent properties, only executed when it is relevant
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
  <p v-on:mousemove="update">Coordinates: {{ x }}, {{ y }}
    <span v-on:mousemove.stop="update">DEAD ZONE</span>
  </p>
</div>
```

* `.stop` = `.stopPropagation`
* `.prevent` = `.preventDefault`
* `.capture` 
* `.self`
* `.once`

You can also pass more than two arguments to the event handler. If there is no argument given to the event handler, VueJS automatically pass event object by default. But if you want to pass DOM event object as one of the arguments, you should pass `$event` for the event object.

##### Example

```html
<div id="app">
  <button v-on:click="increaseCounter(2, $event)">Click</button>
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
    increaseCounter: function(step, event) {
      counter += step;
    }
  }
});
```

#### Key Modifiers

You can use _key modifiers_ for key-related events. Key modifiers allows you to find what keys were used during the event. You can _chain_ multiple key modifiers, too.

##### Example
```html
<input type="text" v-on:keyup.enter.space="alertMe">
```

`alertMe` function will be fired when `enter` and `space` keys are used.

* `enter`
* `tab`
* `esc`
* `delete` || `backspace`
* `up`
* `down`
* `left`
* `right`

### 4. v-model

So far, you could either _bind_ the data or _listen_ to the events and get data from _event object._ `v-model` enables both and this is called _Two way binding._ You can simultaneously listen to the event and update data properties together by using `v-model`.

![v-model](https://cloud.githubusercontent.com/assets/19285811/21631155/8c221268-d27b-11e6-8aa2-ed819f59b3b2.jpg)

```html
<div id="app">
  <input type="text" v-model="title">
  <p>{{ title }}</p>
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    title: 'Default'
  }
});
```

When we execute the above code, at fist, a string data of title—Default— will show. The value changes when you write any thing in the `<p>` element. Not only will `v-model` enable to change the value, but also it updates the property value of data object too.


## 5. Other properties

### 1. Computed property

Computed property is _dependent property._ It is a property possessing functions used in Vue instance, just like methods, but works completely different from methods. When you use functions definded as a property of computed property, the functions are only executed when it is relevant to them, more precisely, when it is dependent to certain data properties.

Let's look at the examples below first and figure out what `computed property` does and when should we use it.

#### Example 1. How _methods_ work

```html
<div id="app">
  <button v-on:click="counter++">Increase</button>
  <button v-on:click="secCounter++">Increment</button>
  <p>Counter: {{ counter }}</p>
  <p>The value of counter is {{ result() }} than 5.</p>
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    counter: 0,
    secCounter: 0
  },
  methods: {
    result: function() {
      console.log('result() is executed');
      return this.counter > 5 ? 'greater' : 'less';
    }
  }
}):;
```
When you click `Increment` button, the value of `secCounter` will change from 0 to 1. Since the data property has changed, VueJS will automatically re-render the page and the `result()` will be re-rendered also.  
This is because VueJS doesn't know the dependency relationships of functions in `methods`, which means that even though the increase of `secCounter` does nothing to do with `result()`, it just re-renders as it is said to be. This becomes troublesome when the project becomes bigger because everytime the pages are re-rendered, so do they have to execute unrelated functions over and over.

So in the browser console, you will see:

```
> result() is executed
// I clicked the Increment button
> result() is executed
```

#### Example 2. How _computed_ work

```html
<div id="app">
  <button v-on:click="counter++">Increase</button>
  <button v-on:click="secCounter++">Increment</button>
  <p>Counter: {{ counter }}</p>
  <p>The value of counter is {{ output }} than 5.</p>
</div>
```

One of the noticeable change is that you use functions like properties. No `()` needed.

```javascript
new Vue({
  el: '#app',
  data: {
    counter: 0,
    secCounter: 0
  },
  computed: {
    output: function() {
      console.log('result() is executed');
      return this.counter > 5 ? 'greater' : 'less';
    }
  }
}):;
```

When you click the Increment button, the result of the console window will be like this:

```
> result() is executed
// I clicked the Increment button
```

To summerize, `computed property` is _synchronous._ When the data property that it is dependent changes, the dependent function should be executed immediately. Unlike `methods`, it only responds to the dependent properties, it makes the application optimal. So it is recommended to use `computed property` instead of `methods` unless you need to execute functions whenever the HTML template page is loaded.


### 2. Watch property

`watch` can be said to be alternative to the `computed property` but it is quite different. It is important to differentiate when to use `watch` or `computed property.`. Both are executed when the value of its relevent properties change. However, `watch` is _asynchronous._

#### Example

```html
<div id="app">
  <button v-on:click="counter++">Increase</button>
  <p>Current value: {{ counter }}</p>
  <p>Result: {{ result }} </p>
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  computed: {
    result: function() {
      return this.counter > 5 ? 'More than 5' : 'Less than 5';
    }
  },
  watch: {
    result: function(value) {
      var vm = this;
      // make a closure for the Vue instance
      setTimeout(function(){
        vm.counter = 0;
      }, 1000);
    }
  }
});
```

The above code will work like this:
1. When a user clicks the Increase button, the value of counter goes up.
2. `result` property is dependent to `counter`, it is constantly executed whenever the value of `counter` changes.
3. When the counter reaches more than 5, the value of result changes from 'Less than 5' to 'More than 5'.
4. When the value of result being changed is detected, `watch` executes its callback function.

Well, I have trouble organizing exact concept of both `computed properties` and `watch` and why they are good. It is somewhat fuzzy. Maybe I should do some personal experiment to grasp it.



## 6. Dynamic styling

There are various ways to change classes for CSS in HTML template using VueJS. Below are examples of how toggling CSS classes works in VueJS.

### 1. Basics

#### 1. Using an object
```html
<head>
  <style>
    .box { width: 250px; height: 250px; }
    .red { background-color: #e74c3c; }
    .green { background-color: #2ecc71; }
    .blue { background-color: #0066ff; }
  </style>
</head>
<body>
  <div id="app"> 
    <div class="box"
        @click="status = !status"
        :class="{ 'red': status }"></div>
  </div>
</body>
```

```javascript
new Vue({
  el: '#app',
  data: {
    status: false
  }
});
```

When you click the `.box`, then the color of the box will turn red and if you click again, it will return to its original status. You can give an object `{ 'name-of-class': boolean }` as the value of `v-bind:class`. Even though class attribute has already been declared before, VueJS will automatically consolidate all the classes into a list. So there is no need to worry about `:class` overwriting `box` class.

#### 2. Using an object

```html
<div id="app">
  <div class="box blue"
      @click="status = !status"
      :class="boxColor"></div>
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    status: false
  },
  computed: {
    boxColor: function() {
      return {
        'red': status,
        'blue': !status
      }
    }
  }
});
```

By default, the box will be blue. However after clicking it, it will turn red because:

1. `status` will be changed from `false` to `true`.
2. `boxColor` will be executed since the value of `status` property changed and it will return an object `{ 'red': true, 'blue': false }`.

#### 3. Using the name of the variable

```html
<div id="app">
  <div class="box"
      :class="color"></div>
  <input type="text" v-model="color">
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    color: ''
  }
});
```

1. When you type either red, blue or green in the input field, the input value will be saved as the value of `color` property in data.
2. The value of `color` will be binded to `:class` and changes the color of box.

We can mix all of these together with array.

```html
<div id="app">
  <div class="box"
      @click="status = !status"
      :class="['red', color, boxColor ]"></div>
  <input type="text" v-model="color">
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    status: false,
    color: ''
  },
  computed: {
    boxColor: function() {
      return {
        'red': status,
        'blue': !status
      };
    }
  }
});
```

VueJS will render `'red'` as a string data, meaning the actual name of the class, get the value of `color` from data and receive an object from `boxColor`, which is originated from `computed property`.

[kickstart]: ##-1.-Kickstart-VueJS
