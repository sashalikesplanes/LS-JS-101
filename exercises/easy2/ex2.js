const rlSync = require('readline-sync');

const userName = rlSync.question('What is your name? ');

if (userName[userName.length - 1] === '!') {
  console.log(`HELLO ${userName.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING!`);
} else console.log(`Hello ${userName}.`);