const isChar = (char) => !!char.match(/[a-z]/gi);

const staggeredCase = (string) => {
  let letterIdx = 0; // only incremented when char is letter
  return string
    .split("")
    .map((char) => {
      if (!isChar(char)) return char;
      letterIdx += 1;
      if (letterIdx % 2 === 1) return char.toUpperCase();
      else return char.toLowerCase();
    })
    .join("");
};

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
