// P
// input: string of length 0 or more with no spaces
// output: array of 0 or more strings which are all palindorms
// rules:
//    Explicit:
//      - every palindromic substring from original string must be in array
//
//    Implicit:
//      - empty string returns empty array
//      - if a palindromic substring is longer than 3 then it's substrings are
//        also included
//      - string with no palindromes should return empty array

// Data Structures
//  - an integer to store current row number
//  - an integer to store current row position
//  - an integer to store the sum

// Algorithm
//  set current integer to 2
//  for loop from row 2 to desired row
//    set sum to 0
//    for loop from 1 to current row number
//      current integer += 2
//      sum += current integer
//  return sum

const sumEvenRows = row => {
  if (row === 0) return 0;
  if (row === 1) return 2;

  let sum;
  let curInt = 2;
  for (let curRow = 2; curRow <= row; curRow++) {
    sum = 0;
    for (let rowPos = 0; rowPos < curRow; rowPos++) {
      curInt += 2;
      sum += curInt;
    }
  }
  return sum;
};

// 2
// 4, 6 = 10
// 8, 10, 12 = 30
// 14, 16, 18, 20 = 68
// 22, 24, 26, 28, 30 = 130

console.log(sumEvenRows(2));
console.log(sumEvenRows(3));
console.log(sumEvenRows(4));
console.log(sumEvenRows(5));