let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.replace(/[^A-Za-z0-9\s]/g, '').split(' ').includes('Dino'));
console.log(str2.replace(/[^A-Za-z0-9\s]/g, '').split(' ').includes('Dino'));

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));