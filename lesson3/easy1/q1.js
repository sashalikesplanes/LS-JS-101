let numbers = [1, 2, 3];
numbers[6] = 5;

// No error as we can assign to any point in the array

numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers[4]); // what will this line return?

// returns undefined