const readline = require('readline-sync');

const userAge = parseInt(readline.question('What is your age? '), 10);
const retireAge = parseInt(readline.question('At what age would you like to retire? '), 10);

const today = new Date();
const currentYear = today.getFullYear();

const yearsToWorkLeft = retireAge - userAge;
const retireYear = currentYear + yearsToWorkLeft;

console.log(`It's ${currentYear}. You will retire in ${retireYear}`);
console.log(`You have only ${yearsToWorkLeft} years of work to go!`);
