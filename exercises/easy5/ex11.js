const subtractOrAddWholeDays = minutes => {
  const MINUTES_PER_DAY = 1440;

  while (minutes < -MINUTES_PER_DAY) {
    minutes += MINUTES_PER_DAY;
  }
  while (minutes > MINUTES_PER_DAY) {
    minutes -= MINUTES_PER_DAY;
  }
  return minutes;
};

const timeOfDay = minutes => {
  const MINUTES_PER_HOUR = 60;
  minutes = subtractOrAddWholeDays(minutes);
  let hours = 0;
  while (minutes > MINUTES_PER_HOUR) {
    hours += 1;
    minutes -= MINUTES_PER_HOUR;
  }
  while (minutes < -MINUTES_PER_HOUR) {
    hours -= 1;
    minutes += MINUTES_PER_HOUR;
  }
  if (minutes === 60) {
    hours += 1;
    minutes -= 60;
  }
  if (minutes < 0 || hours < 0) {
    minutes += 60;
    hours += 23;
  }
  if (hours === 24) hours -= 24;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");