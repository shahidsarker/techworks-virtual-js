// 824. Goat Latin
// https://leetcode.com/problems/goat-latin/
// A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.

// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".

// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin.

// Example 1:

// Input: "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// Example 2:

// Input: "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

// Notes:

// S contains only uppercase, lowercase and spaces. Exactly one space between each word.
// 1 <= S.length <= 150.

/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  // if it begins with a vowel, add 'ma'
  // if it begins with a consonant, move first character to the end, and then add 'ma'
  // add 'a' to end based on index value
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };
  let workingString = S.split(" ");
  for (let g = 0; g < workingString.length; g++) {
    let currentWord = workingString[g];
    const firstChar = currentWord[0];
    // check the first character of the string
    //    if NOT a vowel, move the first character to the end of the string
    if (!vowels[firstChar.toLowerCase()]) {
      currentWord = currentWord.slice(1) + firstChar;
    }
    // add 'ma' to the end
    // add 'a' corresponding to the index value
    currentWord += "ma";
    // repeat a string x number of times
    currentWord += "a".repeat(g + 1);

    workingString[g] = currentWord;
  }

  return workingString.join(" ");
};

toGoatLatin("I speak Goat Latin"); // "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

toGoatLatin("The quick brown fox jumped over the lazy dog"); //  "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
