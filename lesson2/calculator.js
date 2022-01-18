// Ask user for first num
// Ask user for second num
// Ask user for operation
// Make the operation
// Display results of operation

const readline = require('readline-sync');

const prompt = msg => {
  console.log(`=> ${msg}`);
};

prompt('Welcome to the Calculator!');

const invalidNumber = num => num.trim() === '' || Number.isNaN(Number(num));

let number1;
do {
  prompt('What is the first number?');
  number1 = readline.question();
} while (invalidNumber(number1));

let number2;
do {
  prompt('What is the second number?');
  number2 = readline.question();
} while (invalidNumber(number2));

let operation;
do {
  prompt('What is the operation?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  operation = readline.question();
} while (!['1', '2', '3', '4'].includes(operation));


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