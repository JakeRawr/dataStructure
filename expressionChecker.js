'use strict';

var Stack = require('./stack');

function expressionChecker (expression){
  var stack = new Stack();
  for (var i = 0; i < expression.length; i++){
    if (expression[i] === '(') {
      stack.push(i);
    } else if ( expression[i] === ')') {
      if (stack.length() > 0) {
        stack.pop();
      } else {
        return 'Missing closing parentheses from position ' + i;
      }
    }
  }

  if (stack.length() > 0){
    return 'Missing opening parentheses from position ' + stack.pop();
  } else {
    return 'No missing parentheses';
  }
}

//test
console.log(expressionChecker('()(()'));
console.log(expressionChecker('()(()))'));
