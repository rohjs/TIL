/*
 * ------------------------------------------------------------
 * JavaScript Abstract Factory Pattern
 * More sophisticated version than Factory Pattern
 * Factory doesn't know what is created exactly
 * You can register creation methods any time you want.
 * Since you have to register everytime you use certain things -> Not flexible
 ------------------------------------------------------------
*/

(function(global){
  'use strict';
  function BlueCircle() {}
  BlueCircle.prototype.create = function() {
    this.item = document.createElement('div');
    this.item.setAttribute('class', 'blue-circle');
    return this;
  }
  function PurpleCircle() {}
  PurpleCircle.prototype.create = function() {
    this.item = document.createElement('div');
    this.item.setAttribute('class', 'purple-circle');
    return this;
  }
  // Abstract Factory
  function CircleFactory() {
    this.types = {};
    this.register = function(type, cls) {
      if (cls.prototype.create) { this.types[type] = cls; }
    };
    this.create = function(type) {
      var circle = new this.types[type]();
      return circle.create();
    };
  }
  global.blue = BlueCircle;

  // Singleton
  var CircleGenerator = (function() {
    var _instance;
    function init() {
      var _circles = [],
          _cf      = new CircleFactory();
          _cf.register('blue', BlueCircle);
          _cf.register('purple', PurpleCircle);

      function _position(circle, left, top) {
        circle.style.left = left + 'px';
        circle.style.top = top + 'px';
      }
      function create(left, top, type) {
        var circle = _cf.create(type).item;
        _circles.push(circle);
        _position(circle, left, top);
        return circle;
      }
      function add(circle, target) {
        target.appendChild(circle);
      }
      return {
        create: create,
        add: add
      }
    }

    return {
      getInstance: function() {
        if ( !_instance ) { _instance = init(); }
        return _instance;
      }
    }
  })();

  global.CircleGenerator = CircleGenerator;
})(window);

// Usage
(function(global){
  'use strict';
  var cg    = CircleGenerator.getInstance(),
      page  = document.querySelector('.page'),
      body  = document.body;

  page.addEventListener('click', function(e) {
    var circle = cg.create(e.pageX-25, e.pageY-25, 'blue');
    cg.add(circle, body);
  });
})(window);