const stringToInteger = numString => {
  let num = 0;
  let index = numString.length - 1;
  let powerOfTen = 0;
  while (numString[index]) {
    num += numString[index] * (10 ** powerOfTen);
    index -= 1;
    powerOfTen += 1;
  }
  return num;
}

console.log(stringToInteger("4321")); // logs true
console.log(stringToInteger("570")); // logs true

const hexToInt = hexStr => {
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
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };
  let hexArr = hexStr.split('').map(digit => DIGITS[digit]);
  let value = 0;
  console.log(hexArr);
  hexArr.map(digit => value = value * 16 + digit);
  return value;
};

console.log(hexToInt('4D9F'));
