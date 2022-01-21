let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

const sumOfOdds = (array) =>
  array.reduce((sum, num) => {
    if (num % 2 === 1) return sum + num;
    else return sum;
  }, 0);

arr.sort((a, b) => sumOfOdds(a) - sumOfOdds(b));
console.log(arr);
