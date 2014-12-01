'use strict';
var LList = require('./lList');
var newList = new LList();
newList.gradeInsert('Taiga', 'A');
newList.gradeInsert('Jake', 'B');
newList.gradeInsert('Ivan', 'C');
newList.gradeInsert('Tylor', 'B');
newList.gradeInsert('Carol', 'A');
console.log(newList.firstGrade.name);
//Taiga
console.log(newList.firstGrade.next.name);
//Jake
console.log(newList.firstGrade.next.next.name);
//Ivan
console.log(newList.firstGrade.next.prev.name);  //Taiga
