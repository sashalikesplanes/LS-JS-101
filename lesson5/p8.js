let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

Object.values(obj).forEach((array) =>
  array.forEach((word) =>
    word.split("").forEach((char) => {
      if ("aeioou".includes(char)) console.log(char);
    })
  )
);
