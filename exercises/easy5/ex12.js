const afterMidnight = timeStr => {
  let hours = Number(timeStr.slice(0,2));
  if (hours === 24) hours = 0;
  let minutes = Number(timeStr.slice(3));
  return (hours * 60) + minutes;
};

const beforeMidnight = timeStr => {
  let hours = 23 - Number(timeStr.slice(0,2));
  let minutes = 60 - Number(timeStr.slice(3));
  return (hours * 60) + minutes;
};

console.log(afterMidnight("00:01") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);