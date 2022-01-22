function rotateRightmostDigits(number, count) {
  let numStr = String(number);
  let outStr = numStr.slice(0, numStr.length - count);
  outStr += numStr.slice(numStr.length - count + 1);
  outStr += numStr[numStr.length - count];
  return Number(outStr);
}

function maxRotation(number) {
  let numStr = String(number);
  for (let i = numStr.length; i > 0; i--) {
    number = rotateRightmostDigits(number, i);
  }
  console.log(number);
  return number;
}
maxRotation(735291); // 321579
maxRotation(3); // 3
maxRotation(35); // 53
maxRotation(105); // 15 -- the leading zero gets dropped
maxRotation(8703529146); // 7321609845
