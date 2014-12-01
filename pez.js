'use strict';
var Stack = require('./stack');
function pez(dispenser, dontWant) {
  var stack = new Stack();
  var filpedStack = new Stack();
  for (var i = 0; i < dispenser.length; i++) {
    stack.push(dispenser[i]);
  }
  var stackLength = stack.length();
  for (var j = 0; j < stackLength; j++) {
    if (stack.peek() !== dontWant) {
      filpedStack.push(stack.pop());
    } else {
      stack.pop();
    }
  }
  var filpedStackLength = filpedStack.length();
  for (var k = 0; k < filpedStackLength; k++) {
    console.log(filpedStack.pop());
  }
  return;
}
pez([
  'r',
  'b',
  'y',
  'y',
  'r',
  'b',
  'r',
  'y',
  'r'
], 'y');