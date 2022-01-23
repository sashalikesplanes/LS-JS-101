// Find next multiple of 7
// Check if all digits are unique
// If not go until the next multiple of 7 and check again
// If we reach largest possible return false
// Otherwise return found number

function featured(num) {
  num += 7 - (num % 7);
  num = num % 2 === 0 ? num + 7 : num;
  while (num <= 9876543201) {
    if (isFeature(num)) return num;
    num += 14;
  }
  return "No possible number";
}

function isFeature(num) {
  // Checks if all digits are unique
  let digitCount = [];
  digitCount.length = 10;
  digitCount.fill(0);
  String(num)
    .split("")
    .forEach((digit) => (digitCount[digit] += 1));
  //console.log(num, digitCount);
  return digitCount.every((digit) => digit < 2);
}

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
