const interleave = (arr1, arr2) => {
  const outArr = [];
  arr1.forEach((_, idx) => outArr.push(arr1[idx], arr2[idx]));
  return outArr;
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));