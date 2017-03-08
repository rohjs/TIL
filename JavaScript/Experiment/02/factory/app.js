/*
 * ------------------------------------------------------------
 * JavaScript Factory Pattern
 * Separating creation & implementation
 * the implementing object doesn't know and care how the item was created
 * the implemenating object only manages the implementation.
 * ------------------------------------------------------------
*/

(function(global) {
  'use strict';
  var CircleCreator = function (className) {
    var circle = document.createElement('div');
    circle.setAttribute('class', className);
    this.item = circle;
  };
  // CircleFactory doesn't know and care how the circle was creating.
  // It only manages what color the circle will be.
  var CircleFactory = function() {
    this.create = function(color) {
      return color === 'blue' ? new CircleCreator('blue-circle') : new CircleCreator('purple-circle');
    };
  }
  // Singleton keeps going
  var CircleGenerator = (function() {
    var instance;
    function init() {
      var _circles = [],
          _cf = new CircleFactory();
      function _position(circle, left, top) {
        circle.style.left = left + 'px';
        circle.style.top = top + 'px';
        return circle;
      }
      function create(color, left, top) {
        var circle = _cf.create(color).item;
        _position(circle, left, top);
        _circles.push(circle);
        return circle;
      }
      function index(circle) {
        return _circles.length;
      }
      function add(circle, target) {
        target.appendChild(circle);
      }
      return {
        create: create,
        add: add,
        index: index
      };
    }
    return {
      getInstance: function() {
        if (!instance) instance = init();
        return instance;
      }
    };
  })();
  global.CircleGenerator = CircleGenerator;
})(window);

(function(global) {
  'use strict';
  var cg    = CircleGenerator.getInstance(),
      page  = document.querySelector('.page'),
      body  = document.body;
  page.addEventListener('click', function(e) {
    var circle = cg.create('purple', e.pageX-20, e.pageY-20);
    cg.add(circle, this);
  });
  body.addEventListener('keydown', function(e){
    if ( e.keyCode === 65 ) {
      var circle = cg.create('blue', Math.floor(Math.random()*600), Math.floor(Math.random()*600));
     cg.add(circle, this);
    }
  });
})(window);