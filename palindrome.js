'use strict';

var Deque = require('./deque');

var deque = new Deque();

Deque.prototype.isPalindrome = function  (string) {
  for (var i = 0; i < string.length; i++) {
    deque.addFront(string[i]);
  }

  return string === deque.toString();
};

//test
console.log(deque.isPalindrome("racecar")); //true
console.log(deque.isPalindrome("isTaiga")); //false
