const leadingSubstrings = (string) => {
  const result = [];
  string.split("").forEach((_, idx) => {
    result.push(string.slice(0, idx + 1));
  });
  return result;
};

const substrings = (string) => {
  const results = [];
  string.split("").forEach((_, idx) => {
    results.push(...leadingSubstrings(string.slice(idx)));
  });
  console.log(results);
  return results;
};

substrings("abcde");
