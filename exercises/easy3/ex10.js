const century = year => {
  const century = Math.ceil(year / 100);
  const centuryStr = String(century);
  switch (centuryStr.slice(-2)) {
    case '11':
    case '12':
    case '13':
      return centuryStr + 'th';
  }
  switch (centuryStr.slice(-1)) {
    case '1': return centuryStr + 'st';
    case '2': return centuryStr + 'nd';
    case '3': return centuryStr + 'rd';
    default: return centuryStr + 'th';
  }
};