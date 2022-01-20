const DIGIT_TO_WORD = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const alphabeticNumberSort = (array) => {
  return [...array].sort((digit1, digit2) => {
    if (DIGIT_TO_WORD[digit1] < DIGIT_TO_WORD[digit2]) return -1;
    else if (DIGIT_TO_WORD[digit1] > DIGIT_TO_WORD[digit2]) return 1;
    else return 0;
  });
};

console.log(
  alphabeticNumberSort([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
);
