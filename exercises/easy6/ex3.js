// input: number
// output: number

// convert number to string
// convert string to array
// reverse array
// convert array to string
// convert string to number

const reverseNumber = number => Number(String(number).split('').reverse().join(''));


console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(120000));
console.log(reverseNumber(1));
