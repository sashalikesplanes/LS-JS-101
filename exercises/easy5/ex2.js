const copyUniqueTo = (resultArr, arr) => {
  arr.forEach(value => {
    if (!resultArr.includes(value)) resultArr.push(value);
  });
};

const union = (arr1, arr2) => {
  const unionArr = [];
  copyUniqueTo(unionArr, arr1);
  copyUniqueTo(unionArr, arr2);
  return unionArr;
};


console.log(union([1, 3, 5], [3, 6, 9]));