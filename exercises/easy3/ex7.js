const twice = number => {
  let numberStr = String(number);
  if (numberStr.length % 2 !== 0) return number * 2;
  else if (numberStr.slice(0, numberStr.length / 2)
           === numberStr.slice(numberStr.length / 2)) {
    return number;
  } else return number * 2;
};