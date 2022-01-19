function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;
  for (let i = 0; i < dotSeparatedWords.length; i += 1) {
    if (!isAnIpNumber(dotSeparatedWords[i])) return false;
  }
  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

console.log(isDotSeparatedIpAddress("1.1.1.1"));
console.log(isDotSeparatedIpAddress("1.1.1"));
console.log(isDotSeparatedIpAddress("1.1.1.1.1"));