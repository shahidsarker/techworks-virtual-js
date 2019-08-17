// callCount
// is a function
// returns a function
// returns a function that, when invoked, returns the number of times it has been called

function callCount() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}

const funcCall = callCount();

funcCall();
funcCall();
funcCall();
