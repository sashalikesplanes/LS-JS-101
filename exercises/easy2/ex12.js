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

const signedIntegerToString = number => {
  if (number < 0) return '-' + integerToString(number * -1);
  else if (number > 0) return '+' + integerToString(number);
  else return integerToString(number);
}


console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");