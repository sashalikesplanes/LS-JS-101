const isPalindrome2 = string => {
  const midpointIdx = Math.ceil(string.length / 2) - 1;
  for (let i = 0; i <= midpointIdx; i+= 1) {
    if (string[i] !== string[string.length - 1 - i]) return false;
  }
  return true;
};

const isPalindrome = string => {
  return string === string.split('').reverse().join('');
}