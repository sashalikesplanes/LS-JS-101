
let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// false as NaN !== NaN

console.log(Number.isNaN(nanArray[0]));