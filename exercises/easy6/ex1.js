// input: string
// output: string

// create new empty string
// loop over input string
// append each character twice to ouuput string

const repeater = string => {
  let outStr = '';
  for (let idx = 0; idx < string.length; idx++) {
    outStr += string[idx].repeat(2);
  }
  console.log(outStr);
  return outStr;
};

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

const repeater2 = string => string.split('').map(char => char + char).join('');
console.log(repeater2('sasGaaa!'));