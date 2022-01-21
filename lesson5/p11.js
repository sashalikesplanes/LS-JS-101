let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = JSON.parse(JSON.stringify(arr));
newArr.forEach((subObj) => {
  Object.keys(subObj).forEach((key) => (subObj[key] += 1));
});

console.log(arr);
console.log(newArr);
