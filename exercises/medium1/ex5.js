const WORD_TO_DIGIT = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordToDigit(sentence) {
  Object.entries(WORD_TO_DIGIT).forEach((entry) => {
    sentence.replace(entry[0], entry[1]);
  });
  console.log(sentence);
  return sentence;
}

wordToDigit("Please call me at five five five one two three four. Thanks.");
