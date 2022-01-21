let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

arr.forEach((subArr) => {
  if (typeof subArr[0] === "number") {
    subArr.sort((a, b) => b - a);
  } else {
    subArr.sort((a, b) => {
      if (a > b) return -1;
      else if (a < b) return 1;
      else return 0;
    });
  }
});

console.log(arr);
