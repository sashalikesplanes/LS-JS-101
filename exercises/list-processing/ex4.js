const leadingSubstrings = (string) => {
  const result = [];
  string.split("").forEach((_, idx) => {
    result.push(string.slice(0, idx + 1));
  });
  console.log(result);
  return result;
};

leadingSubstrings("abc"); // ["a", "ab", "abc"]
leadingSubstrings("a"); // ["a"]
leadingSubstrings("xyzzy"); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
