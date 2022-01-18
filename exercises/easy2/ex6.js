const penultimate = sentence => {
  const wordArr = sentence.split(' ');
  return wordArr[wordArr.length - 2];
};

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); 