// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // ======================
  // BASE CASES
  // ======================
  var type = typeof obj;

  // null
  if (obj === null) {
    return 'null';
  }
  // string
  if (type === 'string') {
    return '"' + obj + '"';
  }
  // number, boolean
  if (type === 'number' || type === 'boolean') {
    return String(obj);
  }
  // undefined, function, symbol
  if (obj === undefined || type === 'function' || type === 'symbol') {
    return undefined;
  }

  // ======================
  // RECURSIVE CASES
  // ======================
  //
  
  // Array
  // NOTE: For arrays, JSON.stringify does NOT include all enumerable properties.
  // It only includes indexed properties starting at 0.
  if (Array.isArray(obj)) {
    let pieces = [];

    for (let i = 0; i < obj.length; i++) {
      let item = obj[i];
      let itemType = typeof item;

      // undefined, a function, or a symbol is censored to null when found in an array.
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description
      if (item === undefined || itemType  === 'function' || itemType === 'symbol') {
        pieces.push(stringifyJSON(null));
      } else {
        pieces.push(stringifyJSON(item));
      }
    }

    return '[' + pieces.join(',') + ']';
  }

  // Object
  if (type === 'object' ) {
    // placeholder
    return '{}';
  }

  // If it doesn't match any of the above types, then who the hell knows what this is
  // But we're not doing anything special with it. :)
  return '';
};
