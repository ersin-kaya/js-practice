// Question:
// You are given an array containing integers from 1 to n, but one number is missing.
// Write an algorithm to find the missing number.
// 📌 The array should contain n elements, but it has only n - 1.
// 📌 All elements are unique, and you need to find the one that’s missing.
// 📌 Do not use any built-in functions!
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// First approach
// time complexity: O(n), space complexity: O(n)
// function findMissingNumber(arr) {
//   let seen = {};
//   let n = arr.length + 1;

//   for (let i = 0; i < arr.length; i++) {
//     seen[arr[i]] = true;
//   }

//   for (let j = 1; j < n; j++) {
//     if (!seen[j]) {
//       return j;
//     }
//   }
// }

// No built-in JavaScript functions are used in this solution.
// Second approach
// time complexity: O(n), space complexity: O(1)
function findMissingNumber(arr) {
  let n = arr.length + 1;
  let total = n * ((n + 1) / 2);
  let arrTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    arrTotal += arr[i];
  }

  let missingNumber = total - arrTotal;
  return missingNumber;
}

console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // Output: 6
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 9])); // Output: 8
console.log(findMissingNumber([2, 3, 4, 5])); // Output: 1
