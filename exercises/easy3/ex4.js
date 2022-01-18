const findFibonacciIndexByLength = numOfDigits => {
  let index = 1n;
  let prevFibNum = 0n;
  let curFibNum = 1n;
  while (true) {
    index += 1n;
    let nextFibNum = prevFibNum + curFibNum;
    if ((nextFibNum / (10n ** (numOfDigits - 1n))) > 0) return index;
    prevFibNum = curFibNum;
    curFibNum = nextFibNum;
  }
};