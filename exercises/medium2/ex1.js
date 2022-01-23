function letterPercentages(string) {
  return {
    lowercase: (
      ((string.match(/[a-z]/g) || []).length / string.length) *
      100
    ).toFixed(2),
    uppercase: (
      ((string.match(/[A-Z]/g) || []).length / string.length) *
      100
    ).toFixed(2),
    neither: (
      ((string.match(/[^a-z]/gi) || []).length / string.length) *
      100
    ).toFixed(2),
  };
}

console.log(letterPercentages("abCdef 123"));
console.log(letterPercentages("AbCd +Ef"));
console.log(letterPercentages("123"));
