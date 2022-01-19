let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(Array.from(statement1.matchAll(/t/g)).length);
console.log(Array.from(statement1).reduce((tCount, curChar) => tCount + (curChar === 't'), 0));

