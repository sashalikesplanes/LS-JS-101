const sumOfSums = (numArr) => {
  return numArr
    .map((_, idx) => numArr.slice(0, idx + 1).reduce((sum, num) => sum + num))
    .reduce((sum, num) => sum + num);
};

// input array
// output integer

// loop over all indices in array
// for each index sum up all numbers from start to index
// add sum to grand sum
console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
