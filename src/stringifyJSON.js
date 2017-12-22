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
  
};
