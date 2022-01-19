const sequence = (count, num) => {
  let outArr = [];
  let curNum = num;
  for (let i = 0; i < count; i++) {
    outArr.push(curNum);
    curNum += num;
  }
  console.log(outArr);
  return outArr;
};

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
