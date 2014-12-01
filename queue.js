'use strict';
function Queue() {
  this.dataStore = [];
  this.enqueue = function (element) {
    this.dataStore.push(element);
  };
  this.dequeue = function () {
    return this.dataStore.shift();
  };
  this.front = function () {
    return this.dataStore[0];
  };
  this.back = function () {
    return this.dataStore[this.dataStore.length - 1];
  };
  this.toString = function () {
    var retStr = '';
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + '\n';
    }
    return retStr;
  };
  this.empty = function () {
    if (this.dataStore.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  this.pDequeue = function () {
    var priority = this.dataStore[0].code;
    var index = 0;
    for (var i = 1; i < this.dataStore.length; ++i) {
      if (this.dataStore[i].code > priority) {
        priority = this.dataStore[i].code;
        index = i;
      }
    }
    return this.dataStore.splice(index, 1);
  };
}
module.exports = Queue;