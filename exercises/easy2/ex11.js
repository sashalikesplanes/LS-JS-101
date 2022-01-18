const integerToString = number => {
  if (number === 0) return '0';
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let outStr = '';
  while (number) {
    let currentDigit = number % 10;
    outStr = DIGITS[currentDigit] + outStr;
    number = (number - currentDigit) / 10
  }
  return outStr;
}

console.log(integerToString(5432))
console.log(integerToString(624531345324))
console.log(integerToString(50000))
console.log(integerToString(0))