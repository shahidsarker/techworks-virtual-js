const addOneToAnswer = (callback, num) => {
  return callback(num) + 1;
};

const multiplyByTwo = num => {
  return num * 2;
};

// console.log(multiplyByTwo(4));

// console.log(addOneToAnswer(multiplyByTwo, 6));

const multiplyByThree = num => {
  return num * 3;
};

console.log(addOneToAnswer(multiplyByThree, 4));

const myName = "Johnathon";

const sayHello = name => {
  const greeting = "Hello ";
  return console.log(greeting);
};

sayHello(myName);

console.log(myName);

// console.log(greeting);

let userOne = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
  name: "John Smith"
};

Object.values(userOne).map(value => {
  console.log(value + " is a value!");
});
