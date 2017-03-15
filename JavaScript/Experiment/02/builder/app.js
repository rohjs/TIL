/*
 * ------------------------------------------------------------
 * JavaScript Builder Pattern
 * The most complicated JavaScript Design Pattern
 * Understand how the jQuery $method is a builder
 * Explore the need of multiple objects
 * Discuss and share the many steps needed to reach the final goal
 ------------------------------------------------------------
*/

(function(global) {
  'use strict';
  function Circle() {
    this.item = document.createElement('div');
    this.item.setAttribute('class', 'circle');
  }
  Circle.prototype.move = function(left, top) {
    this.item.style.left = left + 'px';
    this.item.style.top = top + 'px';
  };
  Circle.prototype.color = function(color) {
    this.item.style.backgroundColor = color;
  };
  Circle.prototype.get = function() {
    return this.item;
  };

  // Create Builders
  function BlueCircleBuilder() {
    this.item = new Circle();
    this.init();
  }
  BlueCircleBuilder.prototype.init = function() {
    this.item.color('#1fb6ff');
  }
  BlueCircleBuilder.prototype.get = function() {
    return this.item;
  }
  function PurpleCircleBuilder() {
    this.item = new Circle();
    this.init();
  }
  PurpleCircleBuilder.prototype.init = function() {
    this.item.color('#7e5bef');
  }
  PurpleCircleBuilder.prototype.get = function() {
    return this.item;
  }

  // Create a Factory
  var CircleFactory = function() {
    this.types = {};
    this.register = function(type, cls) {
      if ( cls.prototype.init && cls.prototype.get ) {
        this.types[type] = cls;
      }
    };
    this.create = function(type) {
      return new this.types[type]().get();
    }
  };

  // Create a Singleton
  var CircleGenerator = (function() {
    var _instance;
    function init() {
      var _circles = [],
          _cf = new CircleFactory();
          _cf.register('blue', BlueCircleBuilder);
          _cf.register('purple', PurpleCircleBuilder);

      function create(type, left, top) {
        var circle = _cf.create(type);
        _circles.push(circle);
        circle.move(left, top);
        return circle;
      }
      function add(circle, target) {
        target.appendChild(circle);
      }
      return {
        create: create,
        add: add
      };
    }
    return {
      getInstance: function() {
        if ( !_instance ) { _instance = init(); }
        return _instance;
      }
    };
  })();
  global.CircleGenerator = CircleGenerator;
})(window);

// Usage
(function(global) {
  'use strict';
  var cg    = CircleGenerator.getInstance(),
      page  = document.querySelector('.page'),
      body  = document.body;

  page.addEventListener('click', function(e) {
    var circle = cg.create('blue', e.pageX-25, e.pageY-25).get();
    cg.add(circle, this);
  });

  body.addEventListener('keydown', function(e) {
    if ( e.keyCode ===  65 ) {
      var circle = cg.create('purple', Math.floor(Math.random()*600), Math.floor(Math.random()*600)).get();
      cg.add(circle, this);
    }
  });
})(window);