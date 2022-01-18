const readline = require('readline-sync');

const loanAmountInUSD = parseFloat(readline.question('Enter the loan amount in $: '));
const annualPercentRate = parseFloat(readline.question('Enter the ARP in %: '));
const loanDurationInMonths = parseInt(readline.question('Enter the loan duration in months: '), 10);

const monthlyPercentRateDecimal = annualPercentRate / 100 / 12;

let monthlyPaymentInUSD = loanAmountInUSD
                          * (monthlyPercentRateDecimal
                          / (1 - ((1 + monthlyPercentRateDecimal)
                          ** (-loanDurationInMonths))));

if (annualPercentRate === 0) {
  // If no interest rate calculate the loan differently
  monthlyPaymentInUSD = loanAmountInUSD / loanDurationInMonths;
}

if (!Number.isNaN(monthlyPaymentInUSD)
    && Number.isFinite(monthlyPaymentInUSD)) {
  console.log(`Your monthly payment is $${monthlyPaymentInUSD.toFixed(2)}`);
} else console.log('That is not a loan!');


