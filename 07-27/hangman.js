// set a secret word
const secretWord = "vuvuzela";
// track the user's tries

// output whether their input is in the secret word
function checkInput(input) {
  // str.indexOf(searchValue)
  //   return secretWord.indexOf(input);
  return secretWord.includes(input);
}

// track user score
let score = 0;

// if the score value is equal to the length of the word, you lose

// while (score < secretWord.length) {}
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let letters = alphabet.split("");
console.log(letters);
// loop through the letters of the alphabet
// for (let i = 0; i <= alphabet.length; i++) {
//   if (checkInput(alphabet[i]) == false) {
//     // if the letter does not exist, you increase the score
//     // console.log(alphabet[i]);
//     score++;
//   }
// }

while (score < secretWord.length) {
  let letter = letters.pop();
  if (checkInput(letter) == false) {
    console.log(letter + " is not in the word");
    score++;
  }
}

console.log("Your score is " + score + " so you lost");
