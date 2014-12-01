'use strict';
//This function assumes the arguments passed in are valid and in scope
//i.e to move tylor back two position, there's needs to have two
//people behind tylor
var LList = require('./lList.js');
var newList = new LList();
newList.insert('taiga', 1);
newList.insert('jake', 1);
newList.insert('carol', 1);
newList.insert('tylor', 1);
newList.insert('ivan', 1);
newList.display();
console.log('\n');
LList.prototype.advance = function (n, item) {
  var cursor = newList.find(item);
  var current = newList.head;
  var previous;
  for (var i = 0; i < n + 1; i++) {
    current = current.next;
  }
  previous = newList.findPrevious(item);
  previous.next = cursor.next;
  cursor.next = current.next;
  current.next = cursor;
  newList.display();
};
//test
newList.advance(3, 'taiga');