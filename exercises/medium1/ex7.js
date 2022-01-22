function fibonacci(n) {
  let prevNums = [0, 1];
  for (let i = 1; i < n; i++) {
    prevNums = [prevNums[1], prevNums[0] + prevNums[1]];
  }
  console.log(prevNums[1]);
  return prevNums[1];
}

fibonacci(20); // 6765
fibonacci(50); // 12586269025
fibonacci(75); // 2111485077978050
