'use strict';

function Deque() {
  this.dataStore = [];

  this.addBack = function (element) {
    this.dataStore.push(element);
  };

  this.removeFront = function () {
    return this.dataStore.shift();
  };

  this.addFront = function (element) {
    var previous = this.dataStore[0];
    var current = '';
    for (var j = 1; j < this.dataStore.length; ++j) {
      current = this.dataStore[j];
      this.dataStore[j] = previous;
      previous = current;
    }
    this.dataStore.push(previous);
    this.dataStore[0] = element;
  };

  this.removeBack = function () {
    return this.dataStore.pop();
  };

  this.front = function () {
    return this.dataStore[0];
  };

  this.back = function () {
    return this.dataStore[this.dataStore.length-1];
  };

  this.toString = function () {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i]; }
    return retStr;
  };

  this.empty = function () {
    if (this.dataStore.length === 0) {
      return true;
    } else {
      return false;
    }
  };


}
module.exports = Deque;
