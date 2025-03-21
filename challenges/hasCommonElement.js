// Question:
// You are given two different arrays. Write an algorithm to check whether they have at least one common element.
// 📌 Do not use any built-in functions!
// 📌 Can you solve it in O(n) or O(n + m) time complexity?
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// First approach
// time complexity: O(n+m), space complexity: O(n+m)
// function hasCommonElement(arr1, arr2) {
//   let common = {};

//   for (let i = 0; i < arr1.length; i++) {
//     common[arr1[i]] = (common[arr1[i]] || 0) + 1;
//   }

//   for (let j = 0; j < arr2.length; j++) {
//     common[arr2[j]] = (common[arr2[j]] || 0) + 1;
//   }

//   for (let key in common) {
//     if (common[key] >= 2) {
//       return true;
//     }
//   }
//   return false;
// }

// No built-in JavaScript functions are used in this solution.
// Second approach
// time complexity: O(n+m), space complexity: O(n)
function hasCommonElement(arr1, arr2) {
  let storedElements = [];

  for (let i = 0; i < arr1.length; i++) {
    storedElements[arr1[i]] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    if (storedElements[arr2[j]]) {
      return true;
    }
  }

  return false;
}

console.log(hasCommonElement([1, 2, 3], [4, 5, 6])); // Output: false
console.log(hasCommonElement([7, 8, 9], [9, 10, 11])); // Output: true
console.log(hasCommonElement([1, 2, 3, 4], [5, 6, 7, 8])); // Output: false
console.log(hasCommonElement([5, 10, 15], [3, 7, 10, 20])); // Output: true
