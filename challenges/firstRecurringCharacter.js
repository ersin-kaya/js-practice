// Question:
// Write a function that finds the first repeating character in a given string.
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// time complexity: O(n^2), space complexity: O(1)
function firstRecurringCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === str[i]) {
        return str[i];
      }
    }
  }
  return null;
}

console.log(firstRecurringCharacter("ABCA"));
console.log(firstRecurringCharacter("BCABA"));
console.log(firstRecurringCharacter("ABCDE"));
