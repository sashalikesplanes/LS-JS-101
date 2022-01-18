// Ask user for first num
// Ask user for second num
// Ask user for operation
// Make the operation
// Display results of operation

const readline = require('readline-sync');

console.log('Welcome to the Calculator!');

console.log('What is the first number?');
let number1 = readline.question();

console.log('What is the second number?');
let number2 = readline.question();

console.log('What is the operation?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

number1 = Number(number1);
number2 = Number(number2);

let output;
switch (operation) {
  case '1':
    output = number1 + number2;
    break;
  case '2':
    output = number1 - number2;
    break;
  case '3':
    output = number1 * number2;
    break;
  case '4':
    output = number1 / number2;
    break;
  default:
    console.log('Invalid operation selected');
}

if (output) console.log(`The result is ${output}`);