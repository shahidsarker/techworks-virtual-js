# JavaScript Virtual Class August 24, 2019

## Factory vs Constructor Functions

Two different types of functions with similar uses.

### Factory Functions

A function that returns an object without using the `new` keyword (i.e. not a class or constructor function).

```javascript
function student(firstName, lastName, course) {
  // create a student object
  const student = {};
  //   assigns values to the student object
  student.firstName = firstName;
  student.lastName = lastName;
  student.course = course;
  //   return the student object
  return student;
}
```

### Constructor Functions

Similar to a factory function but you use the `new` keyword to invoke it. Capitalize the name of the function to designate it as a constructor function. You can create multiple objects with the constructor and use the `instanceof` keyword to check if any number of objects were created from a particular constructor.

```javascript
function Student(firstName, lastName, course) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.course = course;
}
```

### Using `new` keyword

```javascript
function person(firstName, lastName, age) {
  const person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age;
  return person;
}
const john = new person('john', 'wayne' 23);
```

If we check the prototype, it's not a person or function, it's an Object.

```javascript
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
const bill = new Person("bill", "wayne", 32);
```

If we check the prototype, it's a Person. Person's prototype is an Object.

Note: If you don't use the `new` keyword with a constructor function, `this` gets bound to the global object. (Test it with console!)

## Destructuring

You can "unpack" individual values from an array or an object and assign them to variables.

```javascript
var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]
```

### Arrays

When working with an array, you can assign respective of index values:

```javascript
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
```

Swap values of an array:

```javascript
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

Assign variables to the return value of a function:

```javascript
function f() {
  return [1, 2];
}

var a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2
```

### Objects

```javascript
var o = { p: 42, q: true };
var { p, q } = o;

console.log(p); // 42
console.log(q); // true
```

Rename variables to properties of an object:

```javascript
var o = { p: 42, q: true };
var { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

You can use the `rest` operator here, too.

```javascript
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
a; // 10
b; // 20
rest; // { c: 30, d: 40 }
```

## Algorithm Practice

Parentheses Validation
[Leetcode question](https://leetcode.com/problems/valid-parentheses/)
