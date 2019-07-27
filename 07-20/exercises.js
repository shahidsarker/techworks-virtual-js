// Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array.

// function pluralize(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     let newValue = array[i] + "s";
//     newArray.push(newValue);
//   }
//   return newArray;
// }

const fruits = ["apple", "banana", "kiwi", "grape"];

// console.log(pluralize(fruits));

function myMap(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const newValue = callback(array[i]);
    newArray.push(newValue);
  }
  return newArray;
}

function simplePlural(word) {
  return word + "s";
}

// by reference
console.log(myMap(fruits, simplePlural));

// by value
console.log(myMap(["apple", "banana", "kiwi", "grape"], simplePlural));

function higherOrder(callback, value) {
  // return simplePlural('apple')
  return callback(value);
}

// console.log(higherOrder(simplePlural, fruits));

// function doSomething(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 5, 4];

// console.log(doSomething(...numbers));

// const moreFruits = ["orange", "strawberry", ...fruits];
// console.log(moreFruits);
