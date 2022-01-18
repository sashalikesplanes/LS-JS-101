const readline = require('readline-sync');

const NOUN = readline.question('Enter a noun: ');
const VERB = readline.question('Enter a verb: ');
const ADJ = readline.question('Enter a adjective: ');
const ADV = readline.question('Enter a adverb: ');

let template = `Do you ${VERB} your ${ADJ} ${NOUN} ${ADV}? That's hilarious!\n` +
               `The ${ADJ} ${NOUN} ${VERB} ${ADV} over the lazy ${NOUN}.\n` +
               `The ${NOUN} ${ADV} ${VERB} up ${ADJ} Joe's turtle.`;

console.log(template);