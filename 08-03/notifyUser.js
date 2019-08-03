function notifyUser(callback, ...arg) {
  const result = callback(arg);
  console.log("callback:", callback);
  console.log("arg:", arg);

  // save the result to my database
  console.log("Your function has been called and it returned " + result);
}

function add5(num) {
  return num * 5;
}

function sayHello() {
  return "Hello";
}

function addThem(numbers) {
  return numbers[0] + numbers[1];
}

// notifyUser(add5, 2)
// notifyUser(add5, 2){
// const result = add5(2)
// console.log('Your function has been called' + 10)
// }

// notifyUser(sayHello)

notifyUser(addThem, 2, 3);
