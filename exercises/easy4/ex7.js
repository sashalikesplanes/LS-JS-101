const runningTotal = array => {
  return array.map((_, index, array) => {
    let i = 0;
    let total = 0;
    while (i <= index) {
      total += array[i];
      i += 1;
    }
    return total;
  });
};