const swapCase = (string) =>
  string
    .split("")
    .map((char) => {
      if ("a" <= char && char <= "z") return char.toUpperCase();
      else return char.toLowerCase();
    })
    .join("");

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
