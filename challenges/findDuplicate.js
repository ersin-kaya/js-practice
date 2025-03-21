// Question:
// Given an array containing numbers from 1 to n, one number is repeated twice.
// Write an algorithm to find the duplicate number.
// 📌 The array has n + 1 elements, since one number appears more than once.
// 📌 Do not use any built-in functions!
// ________________________________________________________________________________________________
//
//
// No built-in JavaScript functions are used in this solution.
// time complexity: O(n), space complexity: O(1)
function findDuplicate(arr) {
  let n = arr.length - 1;
  let total = n * ((n + 1) / 2);
  let arrTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    arrTotal += arr[i];
  }

  let duplicate = arrTotal - total;
  return duplicate;
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // Output: 3
console.log(findDuplicate([1, 1])); // Output: 1
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6])); // Output: 6
