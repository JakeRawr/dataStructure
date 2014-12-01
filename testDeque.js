'use strict';
var Deque = require('./deque');
var deque = new Deque();
deque.addBack('Banana');
// ['Banana']
deque.addBack('Said');
// ['Banana', 'Said']
deque.addBack('Jake');
// ['Banana', 'Said' , 'Jake']
deque.addFront('Love');
// ['Love', 'Banana', 'Said', 'Jake']
deque.addFront('I');
// ['I', 'Love', 'Banana', 'Said', 'Jake']
var remove1 = deque.removeBack();
// ['I', 'Love', 'Banana', 'Said']
var remove2 = deque.removeBack();
// ['I', 'Love', 'Banana']
//Should print I love Banana
console.log(deque.toString());
//Should print Jake
console.log(remove1);
//Should print Said
console.log(remove2);