'use strict';
var Queue = require('./queue');
function Patient(name, code) {
  this.name = name;
  this.code = code;
}
var p = new Patient('Smith', 5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient('Jones', 4);
ed.enqueue(p);
p = new Patient('Fehrenbach', 6);
ed.enqueue(p);
p = new Patient('Brown', 1);
ed.enqueue(p);
p = new Patient('Ingram', 1);
ed.enqueue(p);
console.log(ed.dataStore);
var seen = ed.pDequeue();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.dataStore);
// another round
var seen = ed.pDequeue();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.dataStore);
var seen = ed.pDequeue();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.dataStore);