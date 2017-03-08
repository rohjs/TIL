function namespace(ns) {
  return window[ns] = window[ns] || {};
}

window.dom = dom || {};

(function(global, $) {
  'use strict';
  function queryAll(selector, context) {
    if ( typeof  selector !== 'string' ) throw new Error('Selector argument should be string data');
    context = context || document;
    return context.querySelectorAll(selector);
  }
  function query(selector, context, index) {
    index = index || 0;
    return queryAll(selector,context).item(index);
  }
  function append(node, parent) {
    parent.appendChild(node);
  }
  function prepend(node, parent) {
    target = parent.firstElementChild;
    console.log(target);
    if ( target ) {
      parent.insertBefore(node, target);
    } else {
      parent.appendChild(node);
    }
  }
  function before(node, target) {
    target = target || null;
    target.parentNode.insertBefore(node, target);
    return node;
  }
  function after(node, target) {
    var sibling = target.nextElementSibling;
    var parent = target.parentNode;
    if ( sibling ){
      parent.insertBefore(node, sibling);
    } else {
      parent.appendChild(node);
    }
    return node;
  }
  function remove(node) {
    node.parentNode.removeChild(node);
    return node;
  }
  function replace(alternative_node, replacing_node) {
    replacing_node.parentNode.replaceChild(alternative_node, replacing_node);
    return replacing_node;
  }
  function exchange(alternative_node, replacing_node) {
    var alt_next, alt_parent;
    alt_next    = alternative_node.nextElementSibling;
    alt_parent  = alternative_node.parentNode;

    before(alternative_node, replacing_node);
    if ( alt_next ) {
      before(replacing_node, alt_next);
    } else {
      append(replacing_node, alt_parent);
    }
  }
  function prevSibling(elem, context) {
    if ( context.nodeType !== 1 ) { throw new Error('Context should be an ELEMENT_NODE.'); }
    if ( typeof elem === 'string' ) {
      context.insertAdjacentHTML('beforebegin', elem);
    } else {
      context.insertAdjacentElement('beforebegin', elem);
    }
    return elem;
  }
  function nextSibling(elem, context) {
    if ( context.nodeType !== 1 ) { throw new Error('Context should be an ELEMENT_NODE.'); }
    if ( typeof elem === 'string' ) {
      context.insertAdjacentHTML('afterend', elem);
    } else {
      context.insertAdjacentElement('afterend', elem);
    }
    return elem;
  }
  function prepend(elem, context) {
    if ( context.nodeType !== 1 ) { throw new Error('Context should be an ELEMENT_NODE.'); }
    if ( typeof elem === 'string' ) {
      context.insertAdjacentHTML('afterbegin', elem);
    } else {
      context.insertAdjacentElement('afterbegin', elem);
    }
    return elem;
  }
  function append(elem, context) {
    if ( context.nodeType !== 1 ) { throw new Error('Context should be an ELEMENT_NODE.'); }
    if ( typeof elem === 'string' ) {
      context.insertAdjacentHTML('beforeend', elem);
    } else {
      context.insertAdjacentElement('beforeend', elem);
    }
    return elem;
  }
  function hasClass(elm, class_name) {
    if ( elm.nodeType !== 1 ) { throw new Error('ELEMENT_NODE is required')}
    if ( typeof class_name !== 'string' ) { throw new Error('String data is required')}
    var _class = elm.getAttribute('class').split(' ');
    var match = null;
    _class.forEach(function(item){
      if ( item === class_name ) {
        console.log(class_name, item);
        match = item;
      }
    });
    return match ? match : false;
  }
  function addClass(elm, class_name) {
    if ( !hasClass(elm, class_name) ) {
      var _class = elm.getAttribute('class');
      elm.setAttrbute('class', _class + ' ' + class_name);
    }
  }
  function removeClass(elm, class_name) {
    if ( elm.nodeType !== 1 ) { throw new Error('ELEMENT_NODE is required')}
    if ( class_name && typeof class_name !== 'string' ) { throw new Error('String data is required')}
    if ( !class_name ) {
      elm.setAttribute('class', '');
    } else {
      var _class = elm.getAttribute('class').split(' ');
      var index = _class.indexOf(class_name);
      if ( index > -1 ) {
        _class.splice(index, 1);
        elm.setAttribute('class', _class.join(' '));
      }
    }
  }
  function toggleClass(elm, class_name) {
    if ( elm.nodeType !== 1 ) { throw new Error('ELEMENT_NODE is required')}
    if ( class_name && typeof class_name !== 'string' ) { throw new Error('String data is required')}
    if ( elm.classList.contains('on') ) {
      elm.classList.remove('on');
    } else {
      elm.classList.add('on');
    }
  }
  function getStyle(elm, prop, pseudo) {
    if ( elm.nodeType !== 1 ) { throw new Error('ELEMENT_NODE is required')}
    if ( prop && typeof prop !== 'string' ) { throw new Error('String data is required')}
    if ( pseudo && typeof pseudo !== 'string' ) { throw new Error('String data is required')}
      
    if ( window.getComputedStyle ) {
      pseudo = pseudo || null;
      return window.getComputedStyle(elm, pseudo)[prop];
    } else {
      return elm.currentStyle[prop];
    }
  }

    $.query = query;
    $[item] = item
  })
})(window, namespace('dom'));


function queryAll(selector, context) {
    if ( typeof  selector !== 'string' ) throw new Error('Selector argument should be string data');
    context = context || document;
    return context.querySelectorAll(selector);
  }

var com = com || {};
com.yahoo = com.yahoo || {};
com.yahoo.project = com.yahoo.project || {};
com.yahoo.project.utility = {
  queryAll: queryAll
}

(function() {

})()