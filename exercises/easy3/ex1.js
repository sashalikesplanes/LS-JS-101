const crunch = string => {
  let stringArr = string.split('');
  return stringArr.filter((currentChar, index, array) => {
    return currentChar !== array[index - 1];
  }).join('');
};