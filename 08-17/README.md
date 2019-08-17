# JavaScript Virtual Class August 17, 2019

## Objects

- Almost everything is considered an object in JavaScript
- Similar to real world objects, they have properties and methods
- Some things aren’t objects themselves but can be treated as such by JS

### Creating An Object

- We can create a user with multiple properties
- We can have functions for that user
- What about multiple properties and functions?

```javascript
const userOne = {
  name: "Jason",
  age: 42,
  sayHello() {
    return "Hello";
  },
  speakName() {
    return "My name is Jason";
  }
};

userOne.name; // 'Jason'
userOne.age; // 42
userOne.sayHello(); // 'Hello'
userOne.speakName(); // 'My name is Jason'
```

### Access and Modify Objects

- Use dot notation to access the properties and methods of an object by value
- Square bracket notation allows you to pass in value as a string or a reference to a value
- You can also use dot or square bracket notation to define properties/methods

## Classes

- JavaScript allows you to define a class of objects
- A blueprint with common properties and methods
- Set up a class with "placeholders" for property values

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return "Hello";
  }

  speakName() {
    return "My name is " + this.name;
  }
}

const jason = new User("Jason", 42);
jason; // User { name: 'Jason', age: 42 }
const britney = new User("Britney", 34);
britney; // User { name: 'Britney', age: 34 }
```

### Class Construction

- use a `constructor()` method to define the properties that will be common amongst instances of your class (e.g. name, age, etc.)
- Assign constructor arguments to object properties
- You can also define properties which don't correspond to an argument
- Use `new` keyword to create an instance
  - Create a new instance
  - Set `this` to that specific instance
  - Calls the class's constructor method with the passed arguments

### Class Methods

- Define methods for an instance of a particular class to use
- No need to use commas to separate constructor and other methods
- Use `this` keyword to refer to the specific instance of the class
- Help keep code DRY
