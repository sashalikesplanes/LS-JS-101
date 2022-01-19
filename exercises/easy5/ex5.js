const interleave = (arr1, arr2) => {
  const outArr = [];
  arr1.forEach((_, idx) => outArr.push(arr1[idx], arr2[idx]));
  return outArr;
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));

const interleaveMap = (arr1, arr2) => {
  const outArr = arr1.map((_, idx) => [arr1[idx], arr2[idx]]).flat();
  return outArr;
};

console.log(interleaveMap([1, 2, 3], ['a', 'b', 'c']));