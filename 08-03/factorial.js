factorial(5); // 120
// 5 * (4 * 3 * 2 * 1) = 120
factorial(4);
// 4 * (3 * 2 * 1)

function factorial(num) {
  // termination case
  if (num <= 0) return;
  // base case
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

const example = factorial(3);
console.log(example);
// factorial(3)
//  3 * (2 * 1)
// factorial(2)
// 2 * (1)
// factorial(1)
// 1
