const isUpper = (char) => "A" <= char && char <= "Z";

const isLower = (char) => "a" <= char && char <= "z";

const letterCaseCount = (string) => {
  const result = { lowercase: 0, uppercase: 0, neither: 0 };
  string.split("").forEach((char) => {
    if (isUpper(char)) result.uppercase += 1;
    else if (isLower(char)) result.lowercase += 1;
    else result.neither += 1;
  });
  console.log(result);
  return result;
};

letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }
