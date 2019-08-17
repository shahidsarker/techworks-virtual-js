// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:
// 121 // true

// Example 2:
// -121 // false

// Example 3:
// 10 // false

// Example 4:
// 22 // true

function isPalindrome(int) {
  const number = int.toString();
  let reversedNumber = "";
  for (let i = number.length - 1; i >= 0; i--) {
    reversedNumber += number[i];
  }
  return number === reversedNumber;
}

isPalindrome(-23322);
isPalindrome(10);

function oldPalindrome(x) {
  let number = x.toString();
  let revnum = [];
  for (let i = 0; i < number.length; i++) {
    revnum.unshift(number[i]);
  }
  if (number == revnum.join("")) {
    return true;
  } else {
    return false;
  }
}
