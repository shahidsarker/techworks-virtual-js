// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

function romanToInt(romanString) {
  let result = 0;
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  for (let i = 0; i < romanString.length; i++) {
    if (
      values[romanString[i]] >= values[romanString[i + 1]] ||
      i + 1 == romanString.length
    ) {
      result += values[romanString[i]];
    } else {
      result += values[romanString[i + 1]] - values[romanString[i]];
      i++;
    }
  }
  return result;
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("XII")); // 12
console.log(romanToInt("IX")); // 9
