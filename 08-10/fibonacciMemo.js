// function fibonacci(num) {
//   if (num === 0) return 0
//   if (num === 1) return 1
//   return fibonacci(num - 1) + fibonacci(num - 2)
// }

// fibonacci(5) // 5
// fibonacci(7) // 13

// const fiboStore = { 0: 0, 1: 1 }

// for any number n, check to see if it is a valid key in fiboStore
// if true, return the value of that key
// if false, calculate the fibonacci number at that position, and store it in fiboStore then return the calculated value

function fibonacci(num, memo) {
  // check to see if the memo object is defined. if not, define it
  memo = memo || { 0: 0, 1: 1 };
  if (num === 0) return 0;
  if (num === 1) return 1;
  if (memo[num]) {
    return memo[num];
  }

  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

fibonacci(1);
fibonacci(172);
