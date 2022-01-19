const sequence = num => {
  let outArr = [];
  for (let i = 1; i <= num; i++) {
    outArr.push(i);
  }
  console.log(outArr);
  return outArr;
};

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

const sequence1 = num => {
  let outArr = [];
  outArr.length = num;
  outArr.fill(0, 0);
  outArr.forEach((_, idx) => {
    outArr[idx] = idx + 1;
  });
  console.log(outArr);
};

sequence1(5);    // [1, 2, 3, 4, 5]
sequence1(3);    // [1, 2, 3]
sequence1(1);    // [1]

const sequence2 = num => {
  let outArr = [];
  outArr.length = num;
  outArr.fill(0, 0);
  outArr = outArr.map((_, idx) => idx + 1);
  console.log(outArr);
};
sequence2(5);    // [1, 2, 3, 4, 5]
sequence2(3);    // [1, 2, 3]
sequence2(1);    // [1]

