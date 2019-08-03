let counter = 0;
function recurse() {
  if (counter === 2) return "Done recursing";
  counter++;
  console.log(counter);
  return recurse();
}

let output = recurse();
console.log(output);
