// 📌 Question:
// Given an array, write an algorithm to check whether any two numbers sum up to a given target value.
// (Return true if such a pair exists, otherwise return false.)
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// time complexity: O(n), space complexity: O(n)
function hasPairWithSumRepeat(arr, target) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (seen[complement]) {
      return true;
    }
    seen[arr[i]] = true;
  }
  return false;
}

console.log(hasPairWithSumRepeat([1, 2, 4, 4], 8)); // true  (4 + 4)
console.log(hasPairWithSumRepeat([1, 2, 3, 9], 8)); // false
console.log(hasPairWithSumRepeat([5, 1, 7, 2, 3], 10)); // true (7 + 3)
