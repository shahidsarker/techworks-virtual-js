// Create a function getLength. This will get the length of an array using
// recursion without accessing its length property. (Hint: Think of other
// built-in array methods.)

function getLength(array) {
  console.log(array);
  // base case
  if (array[0] === undefined) return 0;
  // recursive call
  // return 1+ getLength(array without the first value)
  return 1 + getLength(array.slice(1));
}

let output = getLength(["a", "b", "c"]);
console.log(output);
