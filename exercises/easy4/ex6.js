const isPalindromicNumber = number => {
  const numberStrArr = String(number).split('');
  if (numberStrArr.join('') === numberStrArr.reverse().join('')) return true;
  else return false;
};