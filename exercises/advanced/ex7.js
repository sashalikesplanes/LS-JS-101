function binarySearch(array, search) {
  if (array.length < 2) return array[0] === search ? 0 : -1;

  let midpoint = Math.floor(array.length / 2);

  if (array[midpoint] === search) return midpoint;
  else if (search < array[midpoint]) {
    let subArr = array.slice(0, midpoint);
    let searchResult = binarySearch(subArr, search);
    if (searchResult === -1) return -1;
    return midpoint - subArr.length + searchResult;
  } else {
    let subArr = array.slice(midpoint + 1);
    let searchResult = binarySearch(subArr, search);
    if (searchResult === -1) return -1;
    return midpoint + 1 + searchResult;
  }
}

let yellowPages = [
  "Apple Store",
  "Bags Galore",
  "Bike Store",
  "Donuts R Us",
  "Eat a Lot",
  "Good Food",
  "Pasta Place",
  "Pizzeria",
  "Tiki Lounge",
  "Zooper",
];
console.log(binarySearch(yellowPages, "Pizzeria")); // 7
console.log(binarySearch(yellowPages, "Apple Store")); // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77)); // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89)); // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5)); // 1

console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Peter"
  )
); // -1
console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Tyler"
  )
); // 6
