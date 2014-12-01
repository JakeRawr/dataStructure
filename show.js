'use strict';
var LList = require('./lList.js');
var newList = new LList();
newList.insert('taiga', 1);
newList.insert('jake', 1);
newList.insert('carol', 1);
newList.insert('tylor', 1);
newList.insert('ivan', 1);
newList.display();
console.log();
LList.prototype.show = function (current) {
  var currentNode = newList.find(current);
  console.log('current element = ' + currentNode.element);
  console.log('current.next = ' + currentNode.next.element);
  console.log('current.previous = ' + currentNode.previous.element);
};
newList.show('tylor');