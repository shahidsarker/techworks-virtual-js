// // add ten to numbers
// const array = [1, 2, 3];
// const result = [];

// for (let i = 0; i < array.length; i++) {
//   const updated = array[i] + 10;
//   result.push(updated);
// }

// console.log(result); // prints [11, 12, 13]

// // add fifteen to numbers
// const array = [1, 2, 3];
// const result = [];

// for (let i = 0; i < array.length; i++) {
//   const updated = array[i] + 15;
//   result.push(updated);
// }

// console.log(result); // prints [16, 17, 18]

// const array = [1, 2, 3];

// function addNum(num) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     const updated = array[i] + num;
//     result.push(updated);
//   }
//   return result;
// }

// console.log(addNum(12));
// console.log(addNum(20));

// First class functions
const array = [1, 2, 3];

function update(callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const updated = callback(array[i]);
    result.push(updated);
  }
  return result;
}

function add10(num) {
  return num + 10;
}

console.log("array", array);

console.log("update(add10)", update(add10));

function multiplyByFive(num) {
  return num * 5;
}

console.log("update(multiplyByFive)", update(multiplyByFive));

function stringify(num) {
  return num.toString();
}

console.log("update(stringify)", update(stringify));
