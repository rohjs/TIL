// 01. indexOf() method doesn't return all indice, and I hate that.
Array.prototype.superIndexOf = function(item) {
  var arr = this;
  var length = arr.length;
  var list = [];

  // * basic logic *
  // find the first element, and change it to another value
  // do it again
  if ( arr.indexOf(item) < 0 ) {
    return -1;
  } else {
    do {
      var idx = arr.indexOf(item);
      arr[idx] = null;
      list.push(idx);
    }
    while ( arr.indexOf(item) > 0 )

    // typeof array === 'object' => REFERENCE TYPE
    // should restore the original array
    do {
      var idx = arr.indexOf(null);
      arr[idx] = item;
    }
    while ( arr.indexOf(null) > 0 )
    return list;
  }
};
