const rlSync = require('readline-sync');

const targetInt = parseInt(rlSync.question('Please enter an\
 integer greater than 0: '));
const mode = rlSync.question('Enter "s" to compute the sum, ' +
                             'or "p" to compute the product. ');

if (mode === 's') {
  let sum = 0
  for (let i = 1; i <= targetInt; i += 1) sum += i;
  console.log(`The sum of the integers between 1 and ${targetInt} is ${sum}.`);
} else if (mode === 'p') {
  let product = 1
  for (let i = 1; i <= targetInt; i +=1 ) product *= i;
  console.log(`The product of the integers between 1 and ${targetInt} ` +
              `is ${product}.`);
} else console.log('Invalid mode');