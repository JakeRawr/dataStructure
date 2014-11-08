'use strict';

function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function TestGrade (name, grade) {
  this.name = name;
  this.grade = grade;
  this.next = null;
  this.prev = null;
}

//double LinkedList
function LList() {
this.head = new Node("head");
this.firstGrade = undefined;

this.remove = function (item) {
var prevNode = this.findPrevious(item);
  if (!(prevNode.next !== null)) {
    prevNode.next = prevNode.next.next;
  }
};

this.findPrevious = function (item) {
  var currNode = this.head;
  while (!(currNode.next == null) &&
           (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
};

this.display= function () {
var currNode = this.head;
while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
   }
};

this.find = function(item) {
var currNode = this.head;
while (currNode.element != item && currNode.next != null) {
      currNode = currNode.next;
   }
return currNode;
};

this.insert = function (newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
};

this.gradeInsert = function (name, grade) {
  var newGrade = new TestGrade(name, grade);
  if(this.firstGrade === undefined){
    this.firstGrade = newGrade;
  } else {
    var current = this.firstGrade;
    while (current.next) {
      current = current.next;
    }

    current.next = newGrade;
    newGrade.prev = current;
  }
};

}

module.exports = LList;
