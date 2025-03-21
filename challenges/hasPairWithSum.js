// 📌 Question:
// Given an array, write an algorithm to check whether any two numbers sum up to a given target value.
// (Return true if such a pair exists, otherwise return false.)
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// Time complexity: O(n), space complexity: O(n)
function hasPairWithSum(arr, target) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (seen[complement] === true) {
      return true;
    }

    if (seen[arr[i]] === undefined) {
      seen[arr[i]] = true;
    }
  }
  return false;
}

console.log(hasPairWithSum([1, 2, 3, 4, 5], 9)); // true (4 + 5 = 9)
console.log(hasPairWithSum([1, 2, 3, 4, 5], 10)); // false
console.log(hasPairWithSum([0, -1, 2, -3, 1], -2)); // true (-3 + 1 = -2)
console.log(hasPairWithSum([10, 20, 30, 40], 60)); // true (20 + 40 = 60)
