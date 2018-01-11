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

// arrow expression
const sayName = () => {
  const message = `My name is ${name}`;
  console.log(message)
}


function sayBye() {
  console.log(`Bye ${name} `);
}

sayName(name);
sayBye(name);
