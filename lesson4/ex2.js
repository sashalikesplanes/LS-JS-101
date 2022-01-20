const doubleNumbers = arr => {
  arr.forEach((_, idx) => {
    arr[idx] *= 2;
  });
  return arr;
};

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]