'use strict';

//This function assumes the arguments passed in are valid and in scope
//i.e to move tylor forward two position, there's needs to have two
//people in front of tylor
var LList = require('./lList.js');

var newList = new LList();

newList.insert('taiga', 1);
newList.insert('jake', 1);
newList.insert('carol', 1);
newList.insert('tylor', 1);
newList.insert('ivan', 1);

newList.display();
console.log('\n');

LList.prototype.back = function (n, item) {
  var cursor = newList.find(item);
  var current = newList.find(item);

  for (var i = 0; i < n + 1; i++){
    current = current.previous;
  }

  cursor.previous.next = cursor.next;
  current.previous.next = cursor;
  cursor.next = current;


  newList.display();
};

newList.back(2, 'tylor');

