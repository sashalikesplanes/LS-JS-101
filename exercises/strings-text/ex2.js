// input array of strings
// output array of strings

// loop over all strings in array
// replace each string in array with same string without vowels

// MAKE SINGLE STRING NO VOWELS
// convert string to array of chars
// filter the array based on if each char is a vowel

const isNotVowel = (char) =>
  !["a", "e", "i", "o", "u"].includes(char.toLowerCase());

const removeVowelsString = (string) => {
  return string.split("").filter(isNotVowel).join("");
};

const removeVowels = (strArr) => {
  return strArr.map(
    (_, idx) => (strArr[idx] = removeVowelsString(strArr[idx]))
  );
};

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"]));
