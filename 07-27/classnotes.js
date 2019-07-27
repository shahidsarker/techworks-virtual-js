// const number = 5; // first line
// function addTwo(input) {
//   // function declaration
//   const result = input + 5;
//   return result;
// }
// const fruit = "apple";

// const num = 3;
// function multiplyBy2(inputNumber) {
//   const result = inputNumber * 2;
//   return result;
// }
// const name = "Shahid";
// const output = multiplyBy2(num);
// const newOutput = multiplyBy2(10);

const array = [1, 2, 3];

function addNum(num) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const updated = array[i] + num;
    result.push(updated);
  }
  return result;
}

let output = addNum(12);
let newOutput = addNum(20);
