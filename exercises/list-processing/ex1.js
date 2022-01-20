const sum = (number) =>
  String(number)
    .split("")
    .reduce((sum, curNum) => sum + Number(curNum), 0);

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
