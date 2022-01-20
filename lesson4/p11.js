let statement = "The Flintstones Rock";
const letterCount = {};

statement.split("").forEach((letter) => {
  if ("a" <= letter.toLowerCase() && letter.toLowerCase() <= "z") {
    letterCount[letter] = letterCount[letter] + 1 || 1;
  }
});
console.log(letterCount);
