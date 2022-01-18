// PEDAC
// Input: An Array of length 2 or more 
//    and an object with title and occupation attributes
// Output: Formatted string
// Example: ['Sasha', 'Kiselev'] {title: student, occupation: coder}
//    -> Hello, Sasha Kiselev! Nice to have a student coder around.
// Algorithm:
//    Start with empty string
//    Add all the elements of name array into one name string
//    Log the formatted string

const greetings = (nameArr, jobObj) => {
  let nameStr = '';
  let i = 0;
  while (nameArr[i]) {
    nameStr += `${nameArr[i]} `;
    i += 1;
  } 
  nameStr = nameStr.trimEnd(); // remove the trailing space
  return `Hello, ${nameStr}! Nice to have a ${jobObj.title} ` +
         `${jobObj.occupation} around.`;
};

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

console.log(greetings(['Sasha', 'Kiselev'], {title: 'Senior', occupation: 'Software Engineer'}))