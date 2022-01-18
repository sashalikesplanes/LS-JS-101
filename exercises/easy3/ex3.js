const stringy = num => {
  if (num === 0) return '';
  let returnStr = '1';
  let currChar = '0';
  while (num > 1) {
    returnStr += currChar;
    num -= 1;
    currChar = (currChar === '0') ? '1' : '0';
  }
  return returnStr;
};