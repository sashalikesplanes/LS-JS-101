// Ask user for first num
// Ask user for second num
// Ask user for operation
// Make the operation
// Display results of operation

const readline = require('readline-sync');
const calcConfig = require('./calcConfig');

const prompt = msg => {
  console.log(`=> ${msg}`);
};

prompt(calcConfig.welcomeMsg);

const invalidNumber = num => num.trim() === '' || Number.isNaN(Number(num));

let continueCalc;
do {
  let number1;
  do {
    prompt(calcConfig.firstNumPrompt);
    number1 = readline.question();
  } while (invalidNumber(number1));

  let number2;
  do {
    prompt(calcConfig.secondNumPrompt);
    number2 = readline.question();
  } while (invalidNumber(number2));

  let operation;
  do {
    prompt(calcConfig.operationPrompt);
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
      console.log(calcConfig.invalidOperationMsg);
  }

  if (output) console.log(`The result is ${output}`);
  prompt(calcConfig.continuePrompt);
  continueCalc = readline.question();
} while (continueCalc === 'y');
