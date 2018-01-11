const name = 'Andrew';

// function declaration
function sayName() {
  const message = `My name is ${name}`;
  console.log(message)
}

// function expression
var sayName = function() {
  const message = `My name is ${name}`;
  console.log(message)
}

// arrow function
const sayName = () => {
  const message = `My name is ${name}`;
  console.log(message)
}

// concise arrow expression
// same as the normal arrow function
// we have to leave the parenthesis becuase there
// are no arguments. We also have to leave the {}
// because there are multiple lines of code
const sayName = () => {
  const message = `My name is ${name}`;
  console.log(message)


// function delcaration
function sayBye() {
  console.log(`Bye ${name} `);
}

// arrow expression
const sayBye = () => {
  console.log(`Bye ${name} `);
}

// concise arrow function
const sayBye = () => console.log(`Bye ${name} `;



sayName(name);
sayBye(name);
