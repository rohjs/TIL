# VueJS

### Kickstart VueJS

A Basic Example Code

```html
<head>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="app.js"></script>
</head>
<body>
  <div id="app" v-on:input="changeTitle">
    <input type="text">
    <p>{{ title }}</p>
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
    changeTitle: function(event) {
      this.title = event.target.value;
    }
  }
});
```
The JavaScript code in `app.js` will then create a Vue instance. There is no need to store the instance in a variable or whatsoever. You just need to make a new Vue instance by "new Vue()".  

The basic idea of VueJS is like this:  
1. You create a HTML file.  
2. A Vue instance is then created based on the HTML file you made. (It is not parsed in DOM yet.)  
3. The instance plays a role as a layer between HTML document file and the DOM.  
Vue instance does all the magical works and outputs a rendered document object model that we could see via browsers.
