// input: string
// output: string

// get length of string
// if string is odd length get middle char
// if even get two middle chars

const centerOf = string => {
  const midpoint = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    return string.slice(midpoint - 1, midpoint + 1);
  } else {
    return string.slice(midpoint, midpoint + 1);
  }
};

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('LaunchSchool'));
console.log(centerOf('x'));