function fibMemo(n, memo = [0, 1]) {
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

function fib(n) {
  // Returns the nth fibonacci number
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
