const negative = num => {
  // Need to do 1 / num as -0 === 0
  return 1 / num <= 0 ? num : -1 * num;
};

console.log(negative(5));

console.log(negative(-3));

console.log(negative(0));

console.log(negative(-0));
