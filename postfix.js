'use strict';
var Stack = require('./stack');
function fencePost(operands, operators, number) {
  operands.push(parseInt(number));
  if (operators.peek() === '*' || operators.peek() === '/') {
    var tempResult = '';
    var firstPop = '';
    if (operands.peek()) {
      firstPop = operands.pop() + ' ';
    }
    tempResult += operands.pop() + ' ';
    tempResult += firstPop;
    tempResult += operators.pop() + ' ';
    operands.push(tempResult);
  }
}
function postfix(infix) {
  var operands = new Stack();
  var operators = new Stack();
  var number = '';
  for (var i = 0; i < infix.length; i++) {
    //check for operators
    if (infix[i] == '*' || infix[i] == '/' || infix[i] == '+' || infix[i] == '-') {
      fencePost(operands, operators, number);
      operators.push(infix[i]);
      number = '';
    } else {
      number += infix[i];
    }
  }
  //store last number, fence post problem
  fencePost(operands, operators, number);
  //pop all the add and minus
  var length = operators.length();
  for (var k = 0; k < length; k++) {
    var storeAgain = '';
    var flip = '';
    if (operands.peek()) {
      flip = operands.pop() + ' ';
    }
    storeAgain += operands.pop() + ' ';
    storeAgain += flip;
    storeAgain += operators.pop() + ' ';
    operands.push(storeAgain);
  }
  return operands.pop();
}
// 35 21 * 42 * 32 /
console.log(postfix('8 + 34 * 23 + 1 * 42 - 2 * 2'));