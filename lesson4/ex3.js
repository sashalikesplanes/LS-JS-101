const doubleOddIdx = (array) => {
  return array.map((_, idx) => (idx % 2 === 1 ? array[idx] * 2 : array[idx]));
};

console.log(doubleOddIdx([1, 2, 3, 4]));
