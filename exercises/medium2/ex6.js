function sumSquareDifference(num) {
  // Make array from 1 to num inclusive
  // get the sum of array
  // get the sum of array elements squared
  // return difference
  let numArr = Array(num)
    .fill(0)
    .map((_, idx) => idx + 1);
  let sum = numArr.reduce((sum, num) => sum + num);
  let sumOfSquares = numArr.reduce((sum, num) => sum + num ** 2, 0);
  return sum ** 2 - sumOfSquares;
}

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
