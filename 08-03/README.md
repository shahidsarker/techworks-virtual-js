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

Let's see how many times `recurse()` is invoked before we get an error.

```javascript
let counter = 0;

function recurse() {
  if (counter === 2) return "I'm finished";
  counter++;
  console.log(counter);
  return recurse(); // This allows the return value to be passed up
}

recurse();
```

_Example of Call Stack, Code Execution_

## Practice

Let's create a function that repeats a character 6 times.

```javascript
function repeat(char) {
  //
}
```

Solution:

```javascript
let result = "";

function repeat(char) {
  if (result.length === 6) return result;

  result += char;
  return repeat(char);
}

console.log(repeat("h"));
```

Something seems wrong... What if we want to use this function again?

Let's try that. Add:

```javascript
console.log(repeat("h"));
```

What happens?

Let's go back to the that `recurse()` example from before.

```javascript
// let counter = 0; // get rid of global counter

function recurse(counter) {
  // pass in counter as a parameter
  if (counter === 2) return "I'm finished";
  counter++;
  console.log(counter);
  return recurse(); // This allows the return value to be passed up
}

recurse(0); // invoke recurse with a counter set to 0
```

We're using the parameter as storage so the function is now self-contained.

```javascript
function recurse(counter) {
  // pass in counter as a parameter
  if (counter === 2) return "I'm finished";
  // let's make the new counter value easier to see
  // counter++;
  const newCounter = counter + 1;
  return recurse(newCounter); // This allows the return value to be passed up
}

const output = recurse(0); // invoke recurse with a counter set to 0
console.log(output);
```

**Bonus** ES6 Allows you to set a default value for the parameter.

```javascript
function recurse(counter = 0) {
  // initialize counter at 0
  if (counter === 2) return "I'm finished";
  const newCounter = counter + 1;
  return recurse(newCounter);
}

const output = recurse(); // no need to pass it in this time
console.log(output);
```
