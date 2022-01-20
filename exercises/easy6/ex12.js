// input string
// output bool

// loop through every character
// increase count by 1 for an open bracket
// decrease count by 1 for a closed bracket
// if count is ever negative return false
// at the end of the loop if count is 0 return true
// else return false

const isBalanced = string => {
  let openCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') openCount += 1;
    else if (string[i] === ')') openCount -= 1;

    if (openCount < 0) return false;
  }
  return openCount === 0;
};


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);