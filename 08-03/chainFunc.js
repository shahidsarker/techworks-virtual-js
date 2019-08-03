// Recursion with an array
// create a function that takes a value
// takes an array of functions
// passes the value through the array of functions

// function addFive()
let counter = 0;
function chainFuncs(input, arrayOfFunc) {
  counter++;
  console.log("call:", counter);
  console.log("input:", input);
  console.log("arrayOfFunc:", arrayOfFunc);
  console.log("");
  // base case
  if (arrayOfFunc[0] === undefined) return input;

  return chainFuncs(arrayOfFunc[0](input), arrayOfFunc.slice(1));
}

function add5(num) {
  return num + 5;
}

function multiplyBy10(num) {
  return num * 10;
}

function subtract9(num) {
  return num - 9;
}

const functionArray = [add5, multiplyBy10, subtract9];

chainFuncs(3, functionArray);
