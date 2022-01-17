const isLeapYear = year => {
  // If Julian calendar perform simple check
  if (year < 1752) return !(year % 4);
  // Else do complex check
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return !(year % 4);
}
