const logInBox = string => {
  let border = '+-' + '-'.repeat(string.length) + '-+';
  let blankLine = '| ' + ' '.repeat(string.length) + ' |';
  let mainLine = '| ' + string + ' |';
  console.log(border);
  console.log(blankLine);
  console.log(mainLine);
  console.log(blankLine);
  console.log(border);
};

logInBox('Sasha');
logInBox('To boldly go where no one has gone before.');
logInBox('');