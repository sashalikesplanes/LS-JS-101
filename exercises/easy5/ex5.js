const interleave = (arr1, arr2) => {
  const outArr = [];
  for (let i = 0; i < arr1.length; i += 1) {
    outArr.push(arr1[i], arr2[i]);
  }
  return outArr;
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));