const swapName = name => name.split(' ').reverse().join(', ');

console.log(swapName('Alexander Kiselev'));

const swapMiddleName = name => {
  name = name.split(' ');
  let surname = name[name.length - 1];
  let firstAndMiddleNames = name.slice(0, name.length - 1).join(' ');
  return surname + ', ' + firstAndMiddleNames;
};

console.log(swapMiddleName("Alexander Denisovich Kiselev"));