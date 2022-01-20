const leadingSubstrings = (string) => {
  const result = [];
  string.split("").forEach((_, idx) => {
    result.push(string.slice(0, idx + 1));
  });
  return result;
};

const substrings = (string) => {
  const results = [];
  string.split("").forEach((_, idx) => {
    results.push(...leadingSubstrings(string.slice(idx)));
  });
  return results;
};

// Get the list of all substrings
// For all substrings of length 2 or more check if palindrome
// Add to result list if yes

// Is a single string a palindrome
// Iterate to midway point of the string
// compare if every character at idx === character at str.length - 1 - idx

const isPalindrome = (string) => {
  return string.length > 1 && string === string.split("").reverse().join("");
};

const palindromes = (string) => {
  return substrings(string).filter(isPalindrome);
};

console.log(palindromes("abcd")); // []
console.log(palindromes("madam")); // [ "madam", "ada" ]

console.log(palindromes("hello-madam-did-madam-goodbye"));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes("knitting cassettes"));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
