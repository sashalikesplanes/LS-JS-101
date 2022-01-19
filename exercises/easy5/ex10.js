const average = arr => {
  return Math.floor(arr.reduce((sum, value) => sum + value, 0) / arr.length);
};


console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));

const average2 = arr => {
  let sum = 0;
  arr.forEach(value => {
    sum += value;
  });
  return Math.floor(sum / arr.length);
};

console.log(average2([1, 5, 87, 45, 8, 8]));
console.log(average2([9, 47, 23, 95, 16, 52]));