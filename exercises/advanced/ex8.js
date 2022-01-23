const { default: Fraction } = require("fraction.js");

let test = new Fraction(2, 1);
//console.log(test);

// initialize sum of fractions to 0
// loop incrementing index starting at 1
// if sum + 1 / index > target then skip
// else add 1 / index to sum and index to list

function egyptian(fraction) {
  let sum = new Fraction(0, 1);
  let index = 1;
  let denominatorList = [];
  while (fraction - sum !== 0) {
    if (fraction >= sum.add(new Fraction(1, index))) {
      sum = sum.add(new Fraction(1, index));
      denominatorList.push(index);
    }
    index++;
  }
  return denominatorList;
}

function unegyptian(denominatorList) {
  return Number(
    denominatorList.reduce(
      (sum, denominator) => sum.add(new Fraction(1, denominator)),
      new Fraction(0, 1)
    )
  );
}

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3
