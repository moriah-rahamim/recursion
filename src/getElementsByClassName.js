// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// NOTE:
// The original document.getelementsByClassName method returns results
// as an HTMLCollection object.
// For the purposes of this assignment we are returning an array.
var getElementsByClassName = function(className, element) {
  if(!element) element = document.body; // default behavior

  var results = []; // to hold the output

  // If this element has the target class, add to results
  var classes = element.classList;
  if(classes && classes.contains(className)) {
    results.push(element);
  }

  // If this element has children, call getElementsByClassName on every child
  var children = element.childNodes;
  for (let i = 0; i < children.length; i++) {
    results = results.concat(getElementsByClassName(className, children[i]));
  }

  return results;
};
