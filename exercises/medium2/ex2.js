function triangle(a, b, c) {
  if (!a || !b || !c) return "invalid";
  else if (a + b + c <= 2 * Math.max(a, b, c)) return "invalid";
  if (a === b && b === c) return "equilateral";
  else if (a === b || b === c || a === c) return "isosceles";
  else return "scalene";
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
