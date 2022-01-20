const multiplyAllPairs = (array1, array2) => {
  const pairArray = [];
  array1.forEach((number1) => {
    array2.forEach((number2) => {
      pairArray.push(number1 * number2);
    });
  });
  return pairArray.sort((a, b) => a - b);
};
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
