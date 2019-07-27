const array = [1, 2, 3];

function update(callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const updated = callback(array[i]);
    result.push(updated);
  }

  return result;
}

// Callback functions
function add5(num) {
  return num + 5;
}

function multiplyBy10(num) {
  return num * 10;
}

function stringify(num) {
  return num.toString();
}

// Call update with each callback function
console.log(update(add5)); // returns [6, 7, 8]
console.log(update(multiplyBy10)); // returns [10, 20, 30]

console.log(update(stringify)); // returns [‘1’, ‘2’, ‘3’]
