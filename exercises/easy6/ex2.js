// input: string
// output: string

// make empty string
// loop through input string
// check if current char is a constant
// if constant then add it twice
// else add it once to empty string
// return

const isConsonant = char => {
  char = char.toLowerCase();
  return ('a' <= char && char <= 'z' && !['a', 'e', 'i', 'o', 'u'].includes(char));
};

const doubleConsonants = string => {
  let outStr = '';
  for (let i = 0; i < string.length; i++) {
    if (isConsonant(string[i])) {
      outStr += string[i].repeat(2);
    } else {
      outStr += string[i];
    }
  }
  console.log(outStr);
  return outStr;
};

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
