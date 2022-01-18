const strToInt = str => {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let digitsArr = str.split('').map(digit => DIGITS[digit]);
  let value = 0;
  digitsArr.map(digit => value = value * 10 + digit);
  return value;
};

const stringToSignedInteger = string => {
  if (string[0] === '-') return -1 * strToInt(string.slice(1));
  else if (string[0] === '+') return strToInt(string.slice(1));
  else return strToInt(string);
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true