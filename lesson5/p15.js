let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

const result = arr.filter((obj) =>
  Object.values(obj).every((subArr) => subArr.every((num) => num % 2 === 0))
);

console.log(result);
