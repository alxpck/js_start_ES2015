'use strict';

const person = {
  firstName: 'Andrew',
  role: 'Teacher'
}

function personDescription(person) {
  // const is immutable so you can't add to the description
  // const description = person.firstName;
  // var is mutable so you can add to the description
  // var description = person.firstName;
  // let is mutable so you can add to the description
  // let also has block level scoping
  // block level scoping means the scope of a variable
  // between curly braces... {} < a block is the stuff
  // within the curly braces
  let description = person.firstName;
  if (person.role) {
    description += ' is a ' + person.role;
  }
  console.log(description);
}

personDescription(person);
