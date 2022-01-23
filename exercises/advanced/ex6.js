function merge(arr1, arr2) {
  let copy1, copy2;
  [copy1, copy2] = [[...arr1], [...arr2]];
  let outArr = [];
  while (copy1.length > 0 && copy2.length > 0) {
    outArr.push(copy1[0] > copy2[0] ? copy2.shift() : copy1.shift());
  }
  outArr = outArr.concat(copy1.length === 0 ? copy2 : copy1);
  return outArr;
}

function mergeSort(arr) {
  // If arr is length 1 return array
  // Else break it down in 2 and run mergeSort on each half
  // Marge two halfs back together
  if (arr.length === 1) return arr;
  let subArr1 = arr.slice(0, arr.length / 2);
  let subArr2 = arr.slice(arr.length / 2);
  return merge(mergeSort(subArr1), mergeSort(subArr2));
}

console.log(mergeSort([9, 5, 7, 1])); // [1, 5, 7, 9]
console.log(mergeSort([5, 3])); // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4])); // [1, 2, 4, 6, 7]

console.log(
  mergeSort(["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"])
);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(
  mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46])
);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
