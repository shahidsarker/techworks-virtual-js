// takes any input
// outputs values 1 through the input value
// for multiples of 3, you output 'Fizz' instead
// for multiples of 5, you output 'Buzz' instead
// for multiples of both 3 and 5, you output 'FizzBuzz'

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    //   checking for multiples of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      //   multiples of 3
    } else if (i % 3 === 0) {
      console.log("Fizz");
      //   multiples of 5
    } else if (i % 5 === 0) {
      console.log("Buzz");
      //   all other numbers
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(num);
// console.log(" pause ");
// fizzBuzz(21);
