const readline = require('readline-sync');
let numArr = [0, 0, 0, 0, 0];

numArr = numArr.map((_, i) => readline.question(`Enter the ${i + 1}th number: `));
let numToSearch = readline.question('Enter the last number: ');
if (numArr.includes(numToSearch)) console.log(`The number ${numToSearch} appears in ${numArr.join(',')}.`);
else console.log(`The number ${numToSearch} does not appear in ${numArr.join(',')}.`);