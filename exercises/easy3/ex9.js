const cleanUp = string => {
  let outStr = '';
  let shouldInsetSpace = true;
  for (let i = 0; i < string.length; i += 1) {
    if (('a'.charCodeAt(0) <= string.charCodeAt(i) &&
         string.charCodeAt(i) <= 'z'.charCodeAt(0)) ||
        ('A'.charCodeAt(0) <= string.charCodeAt(i) &&
         string.charCodeAt(i) <= 'Z'.charCodeAt(0)) ||
        ('1'.charCodeAt(0) <= string.charCodeAt(i) &&
         string.charCodeAt(i) <= '9'.charCodeAt(0))) {
      outStr += string[i];
      shouldInsetSpace = true;
    } else if (shouldInsetSpace) {
      outStr += ' ';
      shouldInsetSpace = false;
    }
  }
  return outStr;
};

//('0' <= string[i] <= '9') || ('A' <= string[i] <= 'Z') ||
console.log(cleanUp("---what's my +*& line?"));
console.log(cleanUp("LK&*^%FSYjk%$fdsha*&^%^&%(*) fas#$@#dau4h6432*&^&R(3 feajsdh t231456"));