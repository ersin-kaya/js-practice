// Question:
// In a given array, every element appears exactly twice, except for one element that appears only once.
// Write an algorithm to find that unique number.
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// First approach
// time complexity: O(n^2), space complexity: O(1)
// function findUniqueElement(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count == 1) {
//       return arr[i];
//     }
//   }
// }

// No built-in JavaScript functions are used in this solution.
// Second approach
// time complexity: O(n), space complexity: O(n)
function findUniqueElement(arr) {
  let countMap = {};
  for (let i in arr) {
    let num = arr[i];
    countMap[num] = (countMap[num] || 0) + 1;
  }

  for (let key in countMap) {
    if (countMap[key] === 1) {
      return key;
    }
  }
}

console.log(findUniqueElement([4, 3, 2, 4, 1, 3, 2])); // Output: 1
console.log(findUniqueElement([7, 7, 5, 5, 9])); // Output: 9
console.log(findUniqueElement([2, 2, 3])); // Output: 3
