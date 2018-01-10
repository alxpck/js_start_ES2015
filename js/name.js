'use strict';

// var is mutable and susceptible to scope errors
// var name = 'Andrew';
// const is immutable and not susceptible to scope errors
const name = 'Andrew';

function createFullName(fName, lName) {
  // not declaring var or const creates a scope error
  // using const globally prevents the scope error
  // name = fName + ' ' + lName;
  // using const in the function prevents the scope error
  const name = fName + ' ' + lName;
  console.log(name);
}

console.log(name);
createFullName("Joel", "Kraft");
