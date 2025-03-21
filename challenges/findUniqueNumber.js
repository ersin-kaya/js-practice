// Question:
// In a given array, every number appears exactly twice, except for one number that appears only once.
// Write an algorithm to find that unique number.
// 📌 Do not use any built-in functions!
// 📌 The array may not be sorted.
// 📌 Can you solve it in O(n) time and O(1) extra space?
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// First approach
// time complexity: O(n), space complexity: O(n)
// function findUniqueNumber(arr) {
//   let seen = {};

//   for (let i = 0; i < arr.length; i++) {
//     seen[arr[i]] = (seen[arr[i]] || 0) + 1;
//   }

//   for (let key in seen) {
//     if (seen[key] === 1) {
//       return key;
//     }
//   }
// }

// No built-in JavaScript functions are used in this solution.
// Second approach
// time complexity: O(n), space complexity: O(1)
function findUniqueNumber(arr) {
  // Example: 5 ^ 5 = 0
  // Example: 7 ^ 0 = 7
  // Example: (A ^ B) ^ C = A ^ (B ^ C)
  // Example: A ^ B = B ^ A
  // Example: (5 ^ 3) ^ 3 = 5
  let unique = 0;

  for (let i = 0; i < arr.length; i++) {
    unique ^= arr[i];
  }

  return unique;
}

console.log(findUniqueNumber([2, 3, 5, 4, 5, 3, 4])); // Output: 2
console.log(findUniqueNumber([7, 1, 1, 2, 2, 3, 3])); // Output: 7
console.log(findUniqueNumber([10, 20, 10, 30, 20, 40, 30])); // Output: 40
console.log(findUniqueNumber([100])); // Output: 100
