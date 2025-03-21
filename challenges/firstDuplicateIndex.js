// Question:
// Given an array of integers, write an algorithm to return the index of the first repeating element.
// If there are no repeating elements, return -1.
// 📌 Do not use any built-in functions.
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// time complexity: O(n), space complexity: O(n)
function firstDuplicateIndex(arr) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    seen[arr[i]] = (seen[arr[i]] || 0) + 1;
    if (seen[arr[i]] > 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstDuplicateIndex([1, 2, 3, 2, 1])); // Output: 3 (second 2 is here)
console.log(firstDuplicateIndex([5, 6, 7, 8, 9])); // Output: -1 (no duplicates)
console.log(firstDuplicateIndex([3, 1, 3, 4, 5, 1])); // Output: 2 (first duplicate is 3)
