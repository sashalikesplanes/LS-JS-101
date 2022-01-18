const swapFirstAndLastChar = word => {
  if (word.length === 1) return word;
  const firstLetter = word[0];
  const lastLetter = word[word.length - 1];
  return lastLetter + word.slice(1, -1) + firstLetter;
};

const swap = sentence => {
  let sentenceArr = sentence.split(' ');
  sentenceArr = sentenceArr.map(swapFirstAndLastChar);
  console.log(sentenceArr.join(' '));
  return sentenceArr.join(' ');
};


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"