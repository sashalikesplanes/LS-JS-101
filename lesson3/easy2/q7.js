let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let barneyArr = Object.entries(flintstones)[2];
console.log(barneyArr);

console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").flat());
