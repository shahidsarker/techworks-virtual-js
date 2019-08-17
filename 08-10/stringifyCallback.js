// // YOUR CODE BELOW
// function stringify(callback) {

//   // stringify must return a new function
//   return function () {

//     // the returned function calls the callback
//     let callbackResult = callback();

//     // before returning the result, coerce the result to a string
//     callbackResult = String(callbackResult);

//     // return the string value
//     return callbackResult;
//   }
// }

function twoPlusTwo() {
  return 2 + 2;
}

const string2plus2 = stringify(twoPlusTwo);

string2plus2();

// YOUR CODE BELOW
function stringify(callback) {
  // stringify must return a new function
  // the returned function calls the callback
  // before returning the result, coerce the result to a string
  // return the string value

  return function() {
    const result = callback();
    return String(result);
  };
}
