# JavaScript: Recursion

Recursion is when a function calls itself.

Factorial example:

```javascript
function factorial(num) {
  if (num < 0) return;
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

factorial(5); // 120
```

## Basics

What would happen if I run this?

```javascript
function recurse() {
  recurse();
}

recurse();
```

(Use [Repl.it](https://repl.it) to follow along)

Code doesn't stop running. Call stack gets full.

_Live Example_

We need a condition for the function to return out of function.

Let's update our code a little.

```javascript
let counter = 0;
function recurse() {
  counter++;
  console.log(counter);
  recurse();
}

recurse();
```
