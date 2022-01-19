let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newFlint = [];

flintstones.forEach(value => {
  if (!Array.isArray(value)) newFlint.push(value);
  else {
    value.forEach(value => newFlint.push(value));
  }
});

console.log(newFlint);
