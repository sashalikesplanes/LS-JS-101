let title = "Flintstone Family Members";

let spacesToAdd = 40 - title.length;
console.log(spacesToAdd);


let padding = Math.floor((40 - title.length) / 2);

title = title.padStart(padding + title.length);

console.log(title);
