let munstersDescription = "The Munsters are creepy and spooky.";
let munsterArr = munstersDescription.split('');
let munsterSwapped = '';

const isLowerLetter = letter => 'a' <= letter && letter <= 'z';
const isUpperLetter = letter => 'A' <= letter && letter <= 'Z';

munsterSwapped = munsterArr.map((letter) => {
  if (isLowerLetter(letter)) return letter.toUpperCase();
  else if (isUpperLetter(letter)) return letter.toLowerCase();
  else return letter;
}).join('');

console.log((munsterSwapped));