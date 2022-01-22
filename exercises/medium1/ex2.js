function rotateRightmostDigits(number, count) {
  let numStr = String(number);
  let outStr = numStr.slice(0, numStr.length - count);
  outStr += numStr.slice(numStr.length - count + 1);
  outStr += numStr[numStr.length - count];
  console.log(outStr);
}
rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917
