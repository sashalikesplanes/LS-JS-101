let words = ["go", "ahead", "and", "jump"];

words.sort((a, b) => a.length - b.length);
console.log(words);

let scores = [
  [1, 4, 2],
  [3, 6, 4],
  [6, 8, 9],
];

scores.sort(
  (a, b) =>
    a.reduce((sum, num) => sum + num) - b.reduce((sum, num) => sum + num)
);

console.log(scores);
