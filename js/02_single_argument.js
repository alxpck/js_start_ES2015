// function declaration
function square(x) {
  return x * x;
}

// arrow expression function
const square = (x) => { return x * x; }

// concise arrow function
const square = x => x * x;
/* cust the parenthesis, the return keyword, and the curly braces when there are multiple lines of code */

// function declaration
function cube(x) {
  return square(x) * x;
}

// arrow function
const cube = (x) => { return square(x) * x; }

// concise arrow function
const cube = x => square(x) * x; 

console.log(square(42));
console.log(cube(42));
