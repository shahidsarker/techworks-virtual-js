// Object Literals

let student = {
  firstName: "John",
  lastName: "Smith",
  age: 26,
  favoriteShows: ["The Bachelorette", "This Is Us", "Stranger Things"]
};

// console.log(student.firstName);

student.firstName; // John
student["lastName"]; // Smith
student.favoriteShows[1]; // This Is Us
student.age; // 26

student.favoriteClass = "JavaScript";

// console.log(student);

let personAction = personObj => {
  //   console.log(personObj);
  // [ 'firstName', 'lastName', 'age', 'favoriteShows', 'favoriteClass' ]
  return Object.keys(personObj).map(key => {
    console.log(personObj[key]);
    // personObj['firstName']
    personObj.key;
  });
};

// personAction(student);

// console.log(Object.keys(student));

var classmate = "Jim";

let neighbor = "Smith";

const birthday = "1990-12-25";

console.log(classmate);

console.log(neighbor);
console.log(birthday);

classmate = "Sally";

console.log(classmate);

neighbor = "Jones";
console.log(neighbor);

// birthday = "1887-01-01";
console.log(birthday);

const myArray = [1, 2, 3, 4];

console.log(myArray);
myArray[2] = "b";
console.log("updated myArray", myArray);

// myArray = "hello";

let sayHello = function() {
  console.log("Hello!");
};

sayHello();

sayHello = () => console.log("Bye");
sayHello();

const isItEven = number => {
  //   if (number % 2 == 0) {
  //     return "Yes";
  //   } else {
  //     return "No";
  //   }
  return number % 2 == 0;
};

console.log(isItEven(4), isItEven(5), isItEven(35), isItEven(7));

console.log(isItEven(5));

let teacher = {
  name: "Johnathon",
  location: "Queensborough Community College",
  age: 99,
  sayHello: () => {
    return "Hello!";
  }
};

// console.log(teacher);

// console.log(teacher.name);

teacher.classes = [];
// console.log(teacher);

teacher.classes.push("HTML");
teacher.classes.push("JavaScript");
// console.log(teacher);

// teacher.sayHello = () => {
//   return "Hello!";
// };

console.log(teacher);
console.log(teacher.sayHello());
