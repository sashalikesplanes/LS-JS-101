const isRealPalindrome = string => {
  const stringArr = (string.toLowerCase().match(/[a-z0-9]/g));
  if (stringArr.join('') === stringArr.reverse().join('')) return true;
  else return false;
};


isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false