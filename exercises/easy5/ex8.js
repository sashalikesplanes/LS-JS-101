const digitList = number => String(number).split('').map(value => Number(value));

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));