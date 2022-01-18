const triangle = length => {
  let currentStarCount = 1;
  while (currentStarCount <= length) {
    console.log(`${' '.repeat(length - currentStarCount)}${'*'.repeat(currentStarCount)}`);
    currentStarCount += 1;
  }
};
triangle(5);
triangle(9);