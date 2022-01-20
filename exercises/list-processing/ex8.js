const buyFruit = (array) => {
  const results = [];
  array.forEach((subArr) => {
    for (let i = 0; i < subArr[1]; i++) {
      results.push(subArr[0]);
    }
  });
  return results;
};

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);
