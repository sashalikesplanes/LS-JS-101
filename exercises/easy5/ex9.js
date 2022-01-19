const countOccurrences = array => {
  const countObj = {};
  array.forEach(value => {
    countObj[value] = countObj[value] + 1 || 1;
  });
  Object.entries(countObj).forEach(pair => console.log(`${pair[0]} => ${pair[1]}`));
};

let vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',];

countOccurrences(vehicles);