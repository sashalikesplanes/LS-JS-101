const selectFruit = obj => {
  let outArr = [];
  Object.entries(obj).forEach(pair => {
    if (pair[1] === 'Fruit') {
      outArr.push(pair);
    }
  });
  return Object.fromEntries(outArr);
};

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }