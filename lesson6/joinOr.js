function joinOr(array, sep = ", ", lastWord = "or") {
  if (array.length === 0) return "";
  else if (array.length === 1) return String(array[0]);
  else if (array.length === 2) return `${array[0]} ${lastWord} ${array[1]}`;
  return (
    array.slice(0, -1).join(sep) +
    sep +
    lastWord +
    " " +
    array[array.length - 1]
  );
}

console.log(joinOr([1, 2, 3])); // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], "; ")); // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ", ", "and")); // => "1, 2, and 3"
console.log(joinOr([])); // => ""
console.log(joinOr([5])); // => "5"
console.log(joinOr([1, 2]));
