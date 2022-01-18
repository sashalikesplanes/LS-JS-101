const utf16Value = string => {
  let utfSum = 0;
  let i = 0;
  while (string[i]) {
    utfSum += string.charCodeAt(i);
    i += 1;
  }
  return utfSum;
}