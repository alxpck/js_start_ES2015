'use strict';

const buttons = document.getElementsByTagName('button');

// document.getElementsByTagName returns an array of objects
console.log(buttons);

// for (var i = 0; i < buttons.length; i++) {
// var creates a scope problem that always returns the value of 10 for i 
for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener('click', function() {
    alert('Button ' + i + ' pressed');
  });
}
