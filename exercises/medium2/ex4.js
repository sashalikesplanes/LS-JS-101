// Input: number - year
// Output: number - count of friday the 13th

// Set the date object to Jan 13th of the given year
// Check if Friday the 13th
// Set the date object to Feb 13th and check if Friday
// Repeat for all months summing the Fridays

function fridayThe13ths(year) {
  let date = new Date();
  date.setFullYear(year);
  date.setDate(13);

  let fridayCount = 0;
  for (let i = 0; i < 12; i++) {
    date.setMonth(i);
    if (date.getDay() === 5) fridayCount += 1;
  }
  return fridayCount;
}
console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
