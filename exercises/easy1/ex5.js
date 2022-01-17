const rlSync = require('readline-sync');


const billAmount = parseFloat(rlSync.question('What is the bill? '));
const tipPercent = parseFloat(rlSync.question('What is the tip percentage? '));
console.log();

const tipAmount = billAmount * tipPercent / 100;
const totalAmount = billAmount + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalAmount.toFixed(2)}`);
