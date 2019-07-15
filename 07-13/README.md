# JavaScript Basics Refresher

## Data Types

- Number
- String
- Boolean
- Array
- Object

### Number

- Int: number without a decimal (integer)
- Float: number with a decimal (“floating point”)

```js
1;
2;
4.0 - 8;
```

One line:
`"John Doe"`
`"Queensborough Community College"`

Template Literals:

```js
`
Zombie ipsum reversus ab viral inferno
nam rick grimes malum cerebro.
De carne lumbering animata corpora quaeritis
`;

let name = "Jonnie";
`His name is ${name}`;
```

### Boolean

Indicates `true` or `false`

### Demo Activity 1

- Create a string variable called `myName` and give it a value of your name
- Create another variable called `myAge` and give it a value of your age
- Add those two together! Do you get a string or a number? Try adding a number and a boolean.
- What data type can we use to store both name and age in one variable?

### Array

One dimensional array

```js
let listOfFruits = ["apple", "banana", "pineapple", "kiwi"];

listOfFruits[3]; // kiwi
```

Destructuring

```js
let [one, two, three, four] = listOfFruits;

one; // apple
two; // banana
three; // pineapple
four; // kiwi
```

Multidimensional array

```js
let grid = [["a", "b", "a"], ["a", "a", "b"], ["b", "b", "a"]];

grid[1][2]; // b (second row, third column)
```

### Demo Activity 2

- Create an array with the names of 5 classmates. Access the classmate in the 4th position of your array
- Access the following array and return the element that contains `gentleman`:

```js
[
  ["happy", "salute", "tile"],
  ["kitchen", "if", "over"],
  ["gentleman", "drum", "napkin"]
];
```

### Objects

Object Literal

```js
let person = {
  firstName: "John",
  lastName: "Smith",
  age: 26,
  favoriteShows: ["The Bachelorette", "This Is Us", "Stranger Things"]
};
```

Object Manipulation

```js
person.firstName; // John
person["lastName"]; // Smith
person.favoriteMovies[1]; // This Is Us
person.age; // 26

person["age"] = 34; // age is reset to 34
person["job"] = "Painter"; // adds a new key 'job' with value 'Painter'
```
