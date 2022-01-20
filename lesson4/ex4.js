const multiply = (array, multiplier) => {
  return array.map((value) => value * multiplier);
};

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
console.log(myNumbers);
