function merge(arr1, arr2) {
  let outArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    outArr.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift());
  }
  outArr = outArr.concat(arr1.length === 0 ? arr2 : arr1);
  return outArr;
}

console.log(merge([1, 5, 9], [2, 6, 8])); // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2])); // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5])); // [1, 4, 5]
console.log(merge([1, 4, 5], [])); // [1, 4, 5]
