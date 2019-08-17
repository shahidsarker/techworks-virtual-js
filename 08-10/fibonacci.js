// Fibonacci number
// Given an input, give me the fibonacci number at that input position
// fibo(0) = 0
// fibo(1) = 1
// fibo(2) = fibo(2-1) + fibo(2-2)
// fibo(n) = fibo(n-1) + fibo(n-2)

// 0, 1, 1, 2, 3, 5, 8, 13, ...

function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(72)); // 13
