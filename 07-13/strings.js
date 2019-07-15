// Create a string variable called myName and give it a value of your name
// Create another variable called myAge and give it a value of your age
// Add those two together! Do you get a string or a number? Try adding a number and a boolean.
// What data type can we use to store both name and age in one variable?

let myName = "Johnathon";
let myAge = 99;

typeof (myName + myAge);

let func = () => {
  return myName + myAge;
};

console.log(func());
