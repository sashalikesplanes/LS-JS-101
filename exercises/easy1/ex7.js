const shortLongShort = (str1, str2) => {
  let shortStr;
  let longStr
  if (str1.length > str2.length) {
    shortStr = str2;
    longStr = str1;
  } else {
    shortStr = str1;
    longStr = str2;
  }

  return shortStr + longStr + shortStr;
}