'use strict';

const days = ['Monday'];
const person = {first: 'Imogen'};

// arrays and objects are still mutable when using const.
days.push("Tuesday");
person.last = "Heap";

// this doesn't work because const prevents complete overwriting of the object
person = {first: 'Alex'};
