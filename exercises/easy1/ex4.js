rlSync = require('readline-sync');

const SQUARE_FEET_PER_METER = 10.7639;

console.log('Enter the length of the room in meters:');
const length = rlSync.prompt();
console.log('Enter the width of the room in meters:');
const width = rlSync.prompt();

const areaInMeters = (length * width).toFixed(2);
const areaInFeet = (length * width * SQUARE_FEET_PER_METER).toFixed(2);
console.log(`The area of the room is ${areaInMeters} square meters\
 (${areaInFeet} square feet).`);